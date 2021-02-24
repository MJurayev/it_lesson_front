import {createContext, useContext, useState} from 'react'
import img from '../assets/page_images/js.walls.png'
 const Context  = createContext()

 const CourseProvider=({children})=>{
    const [courses, setCourses] = useState([
        {
          "id": 1,
          "title": "C++ asoslari1",
          "isLiked": false,
          "status":"completed",
          "walls":img,
          "joined":true
        },
        {
          "id": 2,
          "title": "php asoslari2",
          "status":"ongoing",
          "isLiked": true,
          "walls":img,
          "joined":true
        },
        {
          "id": 3,
          "title": "C# asoslari3",
          "status":"completed",
          "isLiked": false,
          "walls":img,
          "joined":true
        },
        {
            "id": 4,
            "title": "C++ asoslari4",
            "status":"completed",
            "isLiked": false,
            "walls":img,
            "joined":true
          },
          {
            "id": 5,
            "title": "php asoslari5",
            "isLiked": true,
            "walls":img,
            "status":"completed",
            "joined":true
          },
          {
            "id": 6,
            "title": "C# asoslari6",
            "isLiked": false,
            "status":"none",
            "walls":img,
            "joined":false
          },
          {
            "id": 7,
            "title": "C++ asoslari7",
            "status":"completed",
            "isLiked": false,
            "walls":img,
            "joined":true
          },
      ])
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


    return (
            <Context.Provider value={{ courses, leaveCourse, favouriteCourse}}>
                <Context.Consumer>
                    {
                        ()=>children
                    }
                </Context.Consumer>
            </Context.Provider>
    )
 }
const useCourses =()=>{
    const {courses, leaveCourse, favouriteCourse}= useContext(Context)
    return {courses, leaveCourse, favouriteCourse}
}
 export {
     CourseProvider,
     useCourses
 }