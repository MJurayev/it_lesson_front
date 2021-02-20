import React from 'react'
import st from './Sidebar.module.scss'
import logo from '../../assets/img/Logo-dark.png'
// import user_avatar from '../../assets/img/avatar.png'
// import { NavLink } from 'react-router-dom'
import SidebarLink from './SidebarLink/SidebarLink'
export default function Sidebar() {
    return (
        <div className={st.sidebar_container}>
           <div className={st.avatar}>
            <img className={st.logo} src={logo} alt="" />
           </div>
           {/* <hr className={st.divider} /> */}
           {/* <div className={st.user_avatar}>
               <img className={st.user_img}  src={user_avatar} alt=""/>
           </div> */}
           {/* <div ><button>Kirish</button><button>register</button> </div>
           <div ><button>Profile</button><button>My Courses</button> </div> */}

           <div className={st.nav_links}>
                <ul className={st.nav}>
                    <SidebarLink hrefTo="/courses/dashboard" title="Dashboard" class="fa fa-home"/>
                    {/* <SidebarLink hrefTo="/courses/book" title="Books" class="fa fa-book"/> */}
                    <SidebarLink hrefTo="/courses/courses" title="Courses" class="fa fa-graduation-cap"/>
                    <SidebarLink hrefTo="/courses/compiler" title="Compiler" class="fa fa-file-code"/>
                    <SidebarLink hrefTo="/courses/laboratory" title="Laboratory" class="fa fa-flask"/>
                    
                </ul>
           </div>
        </div>
    )
}
