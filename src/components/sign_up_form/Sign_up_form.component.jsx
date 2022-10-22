
import { useState} from "react";

import { createAuthUserwithEmailandPassword , createUserDocumentFromAuth} from "../../routes/utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.component.scss"
import Button from "../button/button.component";

const defaultFormFields = {
    displayName : "",
    email: "",
    password:"",
    confirmPassword:""
}

const SignUpForm = ()=>{

    const [formData , setFormData ] = useState(defaultFormFields)
    const { displayName , email , password , confirmPassword} = formData; 
    console.log(formData)
    const onChangeHandler = (e)=>{
        const { name , value } = e.target;
        setFormData({...formData,[name]:value})
    }
    const resetFormField = ()=>{
        setFormData(defaultFormFields)
    }
    const onSubmitHandler = async (event)=>{
        event.preventDefault();

        if(password !== confirmPassword){
            alert("Passwords do not match")
            return;
        }

        try{
        const {user} = await createAuthUserwithEmailandPassword(email,password)
        await createUserDocumentFromAuth(user,{displayName})
        resetFormField()
        }catch(error){
            if(error.code === "auth/email-already-in-use"){
                alert("email already exxists in the database")
            }else{
                console.error(error)
            }
        }
    }
    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign Up with your Email and Password</span>
            <form onSubmit={onSubmitHandler}>
                {/* <label>Display Name</label> */}
                <FormInput label="Display Name" type="text" onChange={onChangeHandler} name="displayName" value={displayName} required/>

                {/* <label>Email</label> */}
                <FormInput label="Email" type="email" onChange={onChangeHandler} name="email" value={email} required/>

                {/* <label>Password</label> */}
                <FormInput label="Password" type="password" onChange={onChangeHandler} name="password" value={password} required/>

                {/* <label>Confirm Password</label> */}
                <FormInput label="Confirm Password" type="password" onChange={onChangeHandler} name="confirmPassword" value={confirmPassword} required/>

                <Button button_type="inverted" type="submit">Sign Up</Button>
            </form>
        </div>
    )
}
export default SignUpForm;