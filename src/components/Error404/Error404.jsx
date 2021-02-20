import React from 'react'
import {Link} from 'react-router-dom'
import st from "./Error404.module.scss";
export default function Error404() {
    return (
        <div className={st.container}>
            <div className={st.face}>
                <div className={st.band}>
                    <div className={st.red}></div>
                    <div className={st.white}></div>
                    <div className={st.blue}></div>
                </div>
                <div className={st.eyes}></div>
                <div className={st.dimples}></div>
                <div className={st.mouth}></div>
            </div>

            <h1>Oops! Something went wrong!</h1>
            <Link to='/' className={st.btn}>Return to Home</Link>
        </div>
    )
}
