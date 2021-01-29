import React from 'react';
import  CoursesLayout from '../Courses/CoursesLayout'
import Sidebar from '../Sidebar/Sidebar';
import st from './UserLayout.module.scss'

const UserLayout = () => {
    return (
        <div className={st.LayoutContainer}>
            <div className={st.sidebar}>
                <Sidebar />
            </div>
            <div className={st.content}>
                <CoursesLayout />
            </div>
        </div>
    );
}

export default UserLayout;
