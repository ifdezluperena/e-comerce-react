import {Link,Outlet} from 'react-router-dom'
import profile_logo from '../../assets/img/Champion_icon 1.png'
import cart_logo from '../../assets/img/RP_icon 1.png'

import "../../index.css"

export const Layout = () =>{
    return(
        <>
                 
            <nav className="navbar">
                <Link to="/Cart"><img src = {cart_logo} className="img-cart"></img></Link>
                <Link to="/">Home  </Link>
                <Link to="/allskins">All Skins</Link>
                <Link to="/login"> <img src = {profile_logo }className="img-profile"></img></Link>
            </nav>
       
            <section>
                <Outlet/>
            </section>
        </>
    )
}