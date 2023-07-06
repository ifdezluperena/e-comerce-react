import { FC } from "react"
import logo from '../../assets/img/logo _LoL.png'

import '../Header/Header.css'

export const Header:FC = () =>{

    return(
        <>
        <header className="main-header">
        
            <img src={logo} className="img-logo" alt="Logo de League of Legends"/>

        </header>
                
        </>

    )
}