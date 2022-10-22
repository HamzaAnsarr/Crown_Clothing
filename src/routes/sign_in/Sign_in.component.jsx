import { signInWithGooglePopup , createUserDocumentFromAuth} from "../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign_up_form/Sign_up_form.component";


const Sign_in = ()=>{

    const logInGoogleUser = async ()=>{
        const {user} = await signInWithGooglePopup()
        const userDocRef =await createUserDocumentFromAuth(user)
    }

    return(
        <>
        <h1>I am Sign IN page</h1>
        <button onClick={logInGoogleUser}>Sign In with Pop up</button>
        <SignUpForm />
        </>
    )
}

export default Sign_in;