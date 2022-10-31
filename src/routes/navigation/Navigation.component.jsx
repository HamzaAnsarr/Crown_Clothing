import { Fragment , useContext} from "react"
import { Link, Outlet } from "react-router-dom"
import {ReactComponent as Crownlogo} from "../../assets/crwnlogo.svg"
import "./navigation.component.scss"
import { UserContext } from "../../contexts/user.context"
import { signOutUser } from "../utils/firebase/firebase.utils"

const Navigation = ()=>{
   const {currentUser , setCurrentUser} = useContext(UserContext)
  //  console.log(currentUser)

  const signOutHandler =async ()=>{
    await signOutUser();
    setCurrentUser(null)
  }
    return(
      <Fragment>
        <div className="navigation-container">
            <Link className="logo-container" to='/'>
            <Crownlogo />
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to="/shop">
                SHOP
                </Link>
                {currentUser ? (
                  <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
                ): (
                  <Link className="nav-link" to="/auth">
                SIGN IN
                </Link>
                )}
                
            </div>
        </div>
      <Outlet/>
      </Fragment>
    )
  }

export default Navigation