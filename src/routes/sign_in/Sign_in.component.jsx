import { signInWithGooglePopup , createUserDocumentFromAuth} from "../utils/firebase/firebase.utils";

const Sign_in = ()=>{

    const logInGoogleUser = async ()=>{
        const {user} = await signInWithGooglePopup()
        const userDocRef =await createUserDocumentFromAuth(user)
    }

    return(
        <>
        <h1>I am Sign IN page</h1>
        <button onClick={logInGoogleUser}>Sign In with Pop up</button>
        </>
    )
}

export default Sign_in;