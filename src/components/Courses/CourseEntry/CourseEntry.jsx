import {useRef,useLocation} from 'react'
import st from './CourseEntry.module.scss'
import { Link, useParams } from 'react-router-dom'
import ThemeList from './ThemeList/ThemeList';

export default function CourseEntry() {
    let {course_id} = useParams();
    const themeStatus = [
        {id:1, themeNumber:1, themeName:"C++ asoslari.Kirish", completely:'17%', grade:"23" },
        {id:2, themeNumber:2, themeName:"Dasturiy ta'minotni sozlash", completely:'17%', grade:"23" },
        {id:3, themeNumber:3, themeName:"C++ dastuslash tilida o'zgaruvchilar", completely:'17%', grade:"23" },
        {id:4, themeNumber:4, themeName:"Butun son turi", completely:'17%', grade:"23" },
        {id:1, themeNumber:1, themeName:"C++ asoslari.Kirish", completely:'17%', grade:"23" },
        {id:1, themeNumber:1, themeName:"C++ asoslari.Kirish", completely:'17%', grade:"23" },
        {id:1, themeNumber:1, themeName:"C++ asoslari.Kirish", completely:'17%', grade:"23" },
        {id:1, themeNumber:1, themeName:"C++ asoslari.Kirish", completely:'17%', grade:"23" },
        {id:1, themeNumber:1, themeName:"C++ asoslari.Kirish", completely:'17%', grade:"23" },
        {id:1, themeNumber:1, themeName:"C++ asoslari.Kirish", completely:'17%', grade:"23" },
        {id:2, themeNumber:2, themeName:"Dasturiy ta'minotni sozlash", completely:'17%', grade:"23" },
        {id:3, themeNumber:3, themeName:"C++ dastuslash tilida o'zgaruvchilar", completely:'17%', grade:"23" },
        {id:4, themeNumber:4, themeName:"Butun son turi", completely:'17%', grade:"23" },
        {id:1, themeNumber:1, themeName:"C++ asoslari.Kirish", completely:'17%', grade:"23" },
        {id:1, themeNumber:1, themeName:"C++ asoslari.Kirish", completely:'17%', grade:"23" },
        {id:1, themeNumber:1, themeName:"C++ asoslari.Kirish", completely:'17%', grade:"23" },
        {id:1, themeNumber:1, themeName:"C++ asoslari.Kirish", completely:'17%', grade:"23" },
        {id:2, themeNumber:2, themeName:"Dasturiy ta'minotni sozlash", completely:'17%', grade:"23" },
        {id:3, themeNumber:3, themeName:"C++ dastuslash tilida o'zgaruvchilar", completely:'17%', grade:"23" },
        {id:4, themeNumber:4, themeName:"Butun son turi", completely:'17%', grade:"23" },
        {id:1, themeNumber:1, themeName:"C++ asoslari.Kirish", completely:'17%', grade:"23" },
        {id:1, themeNumber:1, themeName:"C++ asoslari.Kirish", completely:'17%', grade:"23" },
        {id:1, themeNumber:1, themeName:"C++ asoslari.Kirish", completely:'17%', grade:"23" },
        {id:1, themeNumber:1, themeName:"C++ asoslari.Kirish", completely:'17%', grade:"23" },
        
    ]
    return (
        <div className={st.container}>
           <div className={st.content_section}>
                <div className={st.title}> 
                    <h1 >C++ dasturlash asoslari va algorithmlash asoslari ma'lumotlar tuzilmasi</h1>
                </div>
                <div className={st.description}>
                    <h2 style={{display:'flex', justifyContent:'center', textAlign:"center", margin:"6px auto" }}>Mundarija</h2>    
                </div>
                <ThemeList themeStatus={themeStatus} courseId ={course_id} />
            </div>
           
        </div>

    )
}
