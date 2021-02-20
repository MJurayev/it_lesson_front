import {  useContext } from "react"
import st from './CoursesLayout.module.scss'
import { Route, Switch } from "react-router-dom";
import TopBar from './TopBar/TopBar'
import Dashboard from '../Dashboard/Dashboard';
// import Laboratory from '../Laboratory/Laboratory';
import CoursesAll from './CoursesAll/CoursesAll';
import Compiler from '../Compiler/Compiler';
import CourseEntry from './CourseEntry/CourseEntry'

// import axios from 'axios'
import LessonComponent from "./CourseEntry/LessonComponent/LessonComponent";
import { CoursesContext } from "../../dataServices/courses/Courses";
export default function Courses() {
  const {courses, favouriteCourse, leaveCourse} = useContext(CoursesContext)
    return (
        <div className={st.container}>
            <div className={st.topBar_section}>
              <TopBar />
            </div>
            <div className={st.course_area}>

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
    )
}
