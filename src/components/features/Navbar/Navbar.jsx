import React from 'react'
import home from "../../../assets/navbar_icons/home_filled.png"
import { Link, NavLink} from  'react-router-dom'
import st from './Navbar.module.scss'
export default function Navbar() {
    return (
        <>
             <div className={st.navbar}>
            <div className={st.logo}>LOGO</div>
            <ul className={st.nav}>
                <li className={st.nav_item}><NavLink activeClassName={st.active} to="/">Home</NavLink></li>
                <li className={st.nav_item}><NavLink activeClassName={st.active} to="/courses/dashboard">Courses</NavLink></li>
                <li className={st.nav_item}>
                    <NavLink activeClassName={st.active} to="/courses/compiler">Compiler</NavLink>
                </li>
                <li className={st.nav_item}><NavLink activeClassName={st.active} to="/about">About us</NavLink></li>
                <li className={st.nav_item}><NavLink activeClassName={st.active} to="/contact">Contact</NavLink></li>
            </ul>

            <div className={st.logout_btn}>Logout</div>
        </div>
        </>
    )
}
