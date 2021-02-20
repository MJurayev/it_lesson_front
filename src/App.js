import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import Error404 from './components/Error404/Error404';
import UserLayout from './components/UserLayout/UserLayout';
import { ThemeContext } from './components/ThemedContext';
import img from "./assets/page_images/Cpp.image.png"
import { useContext, useState , useEffect } from 'react';
import { CoursesContext } from './dataServices/courses/Courses';
import Loader from './components/Loader/Loader';
import  LoaderContext, { Context }  from './dataServices/Loader/LoaderContext';

function App() {
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

  const [dark, setDark] = useState(false)
  const toggleTheme =()=>{
    setDark(x=>{
      console.log(x)
      return !x
    })
  }
  return (
    <CoursesContext.Provider value={{courses,favouriteCourse, leaveCourse }} >
      
      <ThemeContext.Provider value={{dark, toggleTheme}}>
      <Router >
        <Switch>
        <Route exact theme={dark} path="/">
            <MainPage />
        </Route>
        <Route path="/courses">
            <UserLayout />
        </Route>
        <Route path='*'>
            <Error404 />
        </Route>
        </Switch>
      </Router>
    </ThemeContext.Provider>
    </CoursesContext.Provider>

  
  );
}

export default App;
