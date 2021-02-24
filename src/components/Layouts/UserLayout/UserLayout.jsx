import React from 'react';
import { Route, Switch } from "react-router-dom";
import Compiler from '../../Compiler/Compiler';
import  CoursesLayout from '../../Courses/CoursesLayout'
import Navbar from '../../features/Navbar/Navbar';
import Sidebar from '../../features/Sidebar/Sidebar';
import st from './UserLayout.module.scss'
import { useCourses } from "../../../dataServices/CoursesProvider";


// import TopBar from '../../Courses/TopBar/TopBar'
import Dashboard from '../../Dashboard/Dashboard';
import CoursesAll from '../../Courses/CoursesAll/CoursesAll';
import CourseEntry from '../../Courses/CourseEntry/CourseEntry'
import LessonComponent from "../../Courses/CourseEntry/LessonComponent/LessonComponent";
const UserLayout = () => {
    const {courses, favouriteCourse, leaveCourse} = useCourses()
    return (
        <div className={st.LayoutContainer}>
            <div className={st.navbar}>
                <Navbar />
            </div>
            <div className={st.content}>
                <Route exact path="/courses/dashboard">
                    <Dashboard courses = {courses} onLeave={leaveCourse} onFavourite={favouriteCourse}/>
                </Route>
                
                {/* <Route exact path="/courses/laboratory">
                    <Laboratory />
                </Route> */}
                <Route exact path="/courses/courses">
                    <CoursesAll onLeave={leaveCourse} courses = {courses} onFavourite={favouriteCourse} />  
                </Route>
                <Switch >
                  <Route exact path="/courses/courses/:course_id">
                        <CourseEntry />
                  </Route>
                  <Route exact path="/courses/courses/:course_id/:theme_id">
                      <LessonComponent />
                  </Route>
                </Switch>
                <Route exact path="/courses/compiler">
                    <Compiler />
                </Route>
            </div>
        </div>
    );
}

export default UserLayout;
