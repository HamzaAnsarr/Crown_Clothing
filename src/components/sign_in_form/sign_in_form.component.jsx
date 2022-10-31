
import { useState , useContext} from "react";

import {  createUserDocumentFromAuth, signInWithGooglePopup ,signInAuthUserWithEmailAndPassword} from "../../routes/utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign_in_form.component.scss"
import Button from "../button/button.component";
import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
    email: "",
    password:"",
}

const SignInForm = ()=>{

    const [formData , setFormData ] = useState(defaultFormFields)
    const { email , password } = formData; 
    // console.log(formData)
    const { setCurrentUser } = useContext(UserContext)

    const SignInWithGoogle = async ()=>{
        const {user} = await signInWithGooglePopup()
        await createUserDocumentFromAuth(user)
    }

    const onChangeHandler = (e)=>{
        const { name , value } = e.target;
        setFormData({...formData,[name]:value})
    }
    const resetFormField = ()=>{
        setFormData(defaultFormFields)
    }
    const onSubmitHandler = async (event)=>{
        event.preventDefault();

        try{
        const {user} = await signInAuthUserWithEmailAndPassword(email, password)
        setCurrentUser(user)
        resetFormField()
        }catch(error){
            // if(error.code == "auth/wrong-password"){
            //     alert("incorerct error")
            // }else if(error.code === "auth/user-not-found"){
            //     alert("Email not found in Firebase")
            // }else{
            //     console.log(error)
            // }
            switch(error.code){
                case "auth/wrong-password":
                    alert("incorerct error")
                    break;
                case "auth/user-not-found":
                    alert("Invalid Email")
                    break;
                default:
                    console.log(error)
            }
        }
    }
    return(
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign In with your Email and Password</span>
            <form onSubmit={onSubmitHandler}>
                
                {/* <label>Email</label> */}
                <FormInput label="Email" type="email" onChange={onChangeHandler} name="email" value={email} required/>

                {/* <label>Password</label> */}
                <FormInput label="Password" type="password" onChange={onChangeHandler} name="password" value={password} required/>
                <div className="buttons_container">
                <Button button_type="inverted" type="submit">Sign In</Button>
                <Button type="button" button_type={"google"} onClick={SignInWithGoogle}>SignIn With Google</Button>
                </div>
            </form>
        </div>
    )
}
export default SignInForm;