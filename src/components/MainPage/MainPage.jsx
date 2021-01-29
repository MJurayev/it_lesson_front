import React, {useContext} from 'react'
import { Link} from  'react-router-dom'
import st from './MainPage.module.scss'
import {ThemeContext} from '../ThemedContext'
export default function MainPage() {
    const {dark, toggleTheme}= useContext(ThemeContext)
const mainStyle = {
    backgroundColor:dark ? 'black' : 'white',
    transition:"all 1s ease-in-out"
}
    return (
        
        <div style={mainStyle} className={st.container}>
                <Link to="courses">Courses</Link>
               <button onClick={toggleTheme}>Toggle</button>
        </div>
    )
}
