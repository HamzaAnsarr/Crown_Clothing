import { Fragment , useContext} from "react"
import { Link, Outlet } from "react-router-dom"
import {ReactComponent as Crownlogo} from "../../assets/crwnlogo.svg"
import CartIcon from "../../components/CartIcon/CartIcon.component"
import CartDropDown from "../../components/cart-dropdown/CartDropdown.component"
import "./navigation.component.scss"
import { UserContext } from "../../contexts/user.context"
import { CartContext } from "../../contexts/cart.context"
import { signOutUser } from "../utils/firebase/firebase.utils"

const Navigation = ()=>{
   const {currentUser} = useContext(UserContext)
  //  console.log(currentUser)
  const {isCartOpen} = useContext(CartContext)

  const signOutHandler =async ()=>{
    await signOutUser();
    // setCurrentUser(null)
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
                <CartIcon />
            </div>
            {/* <CartDropDown /> */}
            { isCartOpen && <CartDropDown /> }
        </div>
      <Outlet/>
      </Fragment>
    )
  }

export default Navigation