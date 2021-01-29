import { useState, useEffect } from "react"
import st from './CoursesLayout.module.scss'
import { Route, Switch } from "react-router-dom";
import TopBar from './TopBar/TopBar'
import Dashboard from '../Dashboard/Dashboard';
import Laboratory from '../Laboratory/Laboratory';
import CoursesAll from './CoursesAll/CoursesAll';
import Compiler from '../Compiler/Compiler';
import CourseEntry from './CourseEntry/CourseEntry'
import img from "../../assets/page_images/Cpp.image.png"
import axios from 'axios'
import LessonComponent from "./CourseEntry/LessonComponent/LessonComponent";
export default function Courses() {
    const [courses, setCourses] = useState([
            {
              "id": 1,
              "title": "C++ asoslari",
              "isLiked": false,
              "status":"completed",
              "walls":img,
              "joined":true
            },
            {
              "id": 2,
              "title": "php asoslari",
              "status":"ongoing",
              "isLiked": true,
              "walls":img,
              "joined":true
            },
            {
              "id": 3,
              "title": "C# asoslari",
              "status":"completed",
              "isLiked": false,
              "walls":img,
              "joined":true
            },
            {
                "id": 4,
                "title": "C++ asoslari",
                "status":"completed",
                "isLiked": false,
                "walls":img,
                "joined":true
              },
              {
                "id": 5,
                "title": "php asoslari",
                "isLiked": true,
                "walls":img,
                "status":"completed",
                "joined":true
              },
              {
                "id": 6,
                "title": "C# asoslari",
                "isLiked": false,
                "status":"none",
                "walls":img,
                "joined":false
              },
              {
                "id": 1,
                "title": "C++ asoslari",
                "isLiked": false,
                "status":"completed",
                "walls":img,
                "joined":true
              },{
                "id": 1,
                "title": "C++ asoslari",
                "isLiked": false,
                "status":"completed",
                "walls":img,
                "joined":true
              },{
                "id": 1,
                "title": "C++ asoslari",
                "isLiked": false,
                "status":"completed",
                "walls":img,
                "joined":true
              },{
                "id": 1,
                "title": "C++ asoslari",
                "isLiked": false,
                "status":"completed",
                "walls":img,
                "joined":true
              },{
                "id": 1,
                "title": "C++ asoslari",
                "isLiked": false,
                "status":"completed",
                "walls":img,
                "joined":true
              },{
                "id": 1,
                "title": "C++ asoslari",
                "isLiked": false,
                "status":"completed",
                "walls":img,
                "joined":true
              },{
                "id": 1,
                "title": "C++ asoslari",
                "isLiked": false,
                "status":"completed",
                "walls":img,
                "joined":true
              },{
                "id": 1,
                "title": "C++ asoslari",
                "isLiked": false,
                "status":"completed",
                "walls":img,
                "joined":true
              },
          ])
    
    // async function getCourses(){
    //     await axios.get("http://localhost:3004/courses")
    //     .then((response)=>{ 
    //         setCourses(response.data)
    //     })
    //     .catch((err)=>{console.log(err)})
    //     console.log(courses)
    // }
    
     const favouriteCourse=(id)=>{
       console.log("Favorited")
        setCourses(
            courses.map((c)=>c.id === id ? {...c, isLiked:!c.isLiked} : c)
        )
    }
    const leaveCourse=(id)=>{
      console.log("Leavve")
       setCourses(
           courses.map((c)=>c.id === id ? {...c, joined:!c.joined} : c)
       )
   }
    
    // useEffect(() => {
    //      getCourses()
    // }, []);
    return (
        <div className={st.container}>
            <div className={st.topBar_section}>
              <TopBar />
            </div>
            <div className={st.course_area}>

                <Route exact path="/courses/dashboard">
                    <Dashboard courses = {courses} onLeave={leaveCourse} onFavourite={favouriteCourse}/>
                </Route>
                
                <Route exact path="/courses/laboratory">
                    <Laboratory />
                </Route>
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
