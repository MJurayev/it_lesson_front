

// import st from './MainPage.module.scss'
import { useTheme } from '../../dataServices/ThemeProvider'
import Navbar from '../features/Navbar/Navbar'



export default function MainPage() {
    const {dark, toggleTheme}= useTheme()
const mainStyle = {
    backgroundColor:dark ? 'black' : 'white',
    transition:"all 1s ease-in-out"
}
    return (
        
        <>
            {/* <div style={mainStyle} className={st.container}>
                <Link to="courses">Courses</Link>
               <button onClick={toggleTheme}>Toggle</button>
        </div> */}

       <Navbar />
        </>
    )
}
