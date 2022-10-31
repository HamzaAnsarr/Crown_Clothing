import SignUpForm from "../../components/sign_up_form/Sign_up_form.component";
import SignInForm from "../../components/sign_in_form/sign_in_form.component";
import "./authentication.component.scss"


const Authentication = ()=>{

    return(
        <div className="authentication_container">
        <SignInForm/>
        <SignUpForm />
        </div>
    )
}

export default Authentication;