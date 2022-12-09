import { initializeApp } from 'firebase/app';
import { getAuth , signInWithPopup , GoogleAuthProvider , createUserWithEmailAndPassword, signInWithEmailAndPassword , signOut , onAuthStateChanged} from 'firebase/auth';
import { getFirestore , doc , getDoc , setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIXVO_rHCtKQHKNrcX28mkEwHibGys9mc",
    authDomain: "crown-clothing-db-5c424.firebaseapp.com",
    projectId: "crown-clothing-db-5c424",
    storageBucket: "crown-clothing-db-5c424.appspot.com",
    messagingSenderId: "561864145436",
    appId: "1:561864145436:web:7f1634c4bfc93f241a7dd9"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt : "select_account"
  })

  export const auth = getAuth()
  export const signInWithGooglePopup = ()=> signInWithPopup(auth , provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth,additionalInformation = {})=>{
    if(!userAuth) return;

    const userDocRef =doc(db, "users" , userAuth.uid)
    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot)
    console.log(userSnapshot.exists())

    if(!userSnapshot.exists()){
      const {displayName , email } = userAuth
      const createdAt = new Date()

      try{
        setDoc(userDocRef , {
          displayName,
          email,
          createdAt,
          ...additionalInformation,
        })
      }catch(error){
        console.log("error creating the user" , error.message)
      }
    }

    return userDocRef;
  }

  export const createAuthUserwithEmailandPassword = async (email,password)=>{
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email,password)
  }

  export const signInAuthUserWithEmailAndPassword = async (email,password)=>{
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth,email,password)
  }

  export const signOutUser = async ()=>await signOut(auth)

  export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback)