import st from './CourseEntry.module.scss'
import { useParams } from 'react-router-dom'
import ThemeList from './ThemeList/ThemeList';

export default function CourseEntry() {

    let {course_id} = useParams();
    const themeStatus = [
        {id:1, themeNumber:1, themeName:"C++ asoslari.Kirish",  grade:"23" },
        {id:2, themeNumber:2, themeName:"Dasturiy ta'minotni sozlash",  grade:"23" },
        {id:3, themeNumber:3, themeName:"C++ dastuslash tilida o'zgaruvchilar",  grade:"23" },
        {id:4, themeNumber:4, themeName:"Butun son turi",  grade:"23" },
        {id:1, themeNumber:1, themeName:"C++ asoslari.Kirish",  grade:"23" },
        {id:1, themeNumber:1, themeName:"C++ asoslari.Kirish",  grade:"23" },
        {id:1, themeNumber:1, themeName:"C++ asoslari.Kirish",  grade:"23" },
        {id:1, themeNumber:1, themeName:"C++ asoslari.Kirish",  grade:"23" },
        {id:1, themeNumber:1, themeName:"C++ asoslari.Kirish",  grade:"23" },
        {id:1, themeNumber:1, themeName:"C++ asoslari.Kirish",  grade:"23" },
        {id:2, themeNumber:2, themeName:"Dasturiy ta'minotni sozlash",  grade:"23" },
        {id:3, themeNumber:3, themeName:"C++ dastuslash tilida o'zgaruvchilar",  grade:"23" },
        {id:4, themeNumber:4, themeName:"Butun son turi",  grade:"23" },
        {id:1, themeNumber:1, themeName:"C++ asoslari.Kirish",  grade:"23" },
        {id:1, themeNumber:1, themeName:"C++ asoslari.Kirish",  grade:"23" },
        {id:1, themeNumber:1, themeName:"C++ asoslari.Kirish",  grade:"23" },
        {id:1, themeNumber:1, themeName:"C++ asoslari.Kirish",  grade:"23" },
        {id:2, themeNumber:2, themeName:"Dasturiy ta'minotni sozlash",  grade:"23" },
        {id:3, themeNumber:3, themeName:"C++ dastuslash tilida o'zgaruvchilar",  grade:"23" },
        {id:4, themeNumber:4, themeName:"Butun son turi",  grade:"23" },
        {id:1, themeNumber:1, themeName:"C++ asoslari.Kirish",  grade:"23" },
        {id:1, themeNumber:1, themeName:"C++ asoslari.Kirish",  grade:"23" },
        {id:1, themeNumber:1, themeName:"C++ asoslari.Kirish",  grade:"23" },
        {id:1, themeNumber:1, themeName:"C++ asoslari.Kirish",  grade:"23" },
        
    ]
    return (
        <div className={st.container}>
           <div className={st.content_section}>
                <div className={st.title}>
                    <div>C++ dasturlash asoslari va algorithmlash asoslari ma'lumotlar tuzilmasi</div>
                </div>
                <ThemeList themeStatus={themeStatus} courseId ={course_id} />
            </div>
           
        </div>

    )
}
