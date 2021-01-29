import React from 'react'
import { Link } from "react-router-dom";
import st from './ThemeList.module.scss'
export default function ThemeList({themeStatus, courseId}) {
    return (
         <div className={st.themes}>
                    <div className={st.heads}>
                        <div className={st.themeNumber}>
                            Mavzu No
                        </div>
                        <div className= {st.themeName}>
                            Mavzu Nomi
                        </div>
                        <div className={st.completely}>
                            Tugallanganligi
                        </div>
                        <div className={st.gradingHeader}>
                            Baho
                        </div>
                    </div>
                    <div className={st.tbody}>
                        {themeStatus.length>0 ? themeStatus.map((theme)=>{
                            return (
                                <>
                                    <div className={st.trow}>
                                        <div className={st.themeNumber}>{theme.themeNumber}</div>
                                            <div  className= {st.themeName}>
                                                <Link 
                                                    title={'Entering the  '+theme.themeName} 
                                                    to={`${courseId}/${theme.id}`}>
                                                    {theme.themeName}
                                                </Link></div>
                                            <div className={st.completely}>{theme.completely}</div>
                                        <div className={st.grading}>{theme.grade}</div>
                                    </div>
                                </>
                            )
                        }) : (<div style={{display:'flex', width:'100%', height:'100%',  fontSize:'24px', marginTop:'auto', justifyContent:'center',  alignItems:'center',  color:'red'}}>
                                "No themes found"
                            </div>)}
                            
                            
                        </div>
                   </div>
    )
}
