import React from 'react'
import { NavLink } from "react-router-dom";
import st from './SidebarLink.module.scss'
export default function SidebarLink(props) {
    return (
        <li className={st.nav_item }>
            <NavLink className={st.nav_link}  activeClassName={st.active} to={props.hrefTo}  >
                <i className={props.class}></i>
                {props.title}
            </NavLink>   
        </li>
    )
}
