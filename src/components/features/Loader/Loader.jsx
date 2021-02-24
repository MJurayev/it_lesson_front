import React from 'react'
import st from './Loader.module.scss'
const Loader = () => {
    // setTimeout(()=>{
    //     var loader = document.getElementById('loader');
    //     setTimeout(()=>{
    //         loader.style.opacity=0;
    //         }, 5000);
    //     if(loader.style.opacity==0 || loader.style.opacity<0){
    //         loader.style.display = 'none';
    //         loader.style.visibility='hidden'
    //     }   
    // }, 5001)

    
    return (
        <div id="loader" className={st.container}>
            <div className={st.wrapper_inner}>
                <div className={st.box_container}>
                <div className={st.text}> 32% </div>
                <div className={st.box}>
                    <div className={st.box1}>
                        <div className={st.box2}>
                       
                        </div>
                    </div>
                </div>
                </div>
                <div className={st.brand} data-text="IT-Lesson" data-description="Dasturlash markazi"></div>
            </div>
        </div>
    )
}
export default Loader;