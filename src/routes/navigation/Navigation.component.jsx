import { Fragment } from "react"
import { Link, Outlet } from "react-router-dom"
import {ReactComponent as Crownlogo} from "../../assets/crwnlogo.svg"
import "./navigation.component.scss"

const Navigation = ()=>{
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
                <Link className="nav-link" to="/signin">
                SIGN IN
                </Link>
            </div>
        </div>
      <Outlet/>
      </Fragment>
    )
  }

export default Navigation