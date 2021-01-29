import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import st from './TopBar.module.scss'
export default function TopBar() {
    const r = useHistory() 
    const [bell, setBell] = useState(false);
    const bellPath1 = {
        fill: bell ? "#5E81F4": '#FFFFFF'
    }
    return (
        // <div className={st.topbar}>
            <div className={st.top}>
                <div className={st.goBack} onClick={()=>{r.goBack()}}><i className="fas fa-arrow-left" aria-hidden="true"> </i></div>
                <span  className={st.search}>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.8394 5.55595C16.1268 7.84337 16.1268 11.552 13.8394 13.8394C11.552 16.1268 7.84337 16.1268 5.55595 13.8394C3.26853 11.552 3.26853 7.84337 5.55595 5.55595C7.84337 3.26854 11.552 3.26854 13.8394 5.55595Z" stroke="#AAB8C6" strokeWidth="2"/>
                <path d="M13.469 13.469L20 20" stroke="#AAB8C6" strokeWidth="2"/>
                </svg>
                <input placeholder="Search" type="text"/>
                    </span>
                <span className={st.bell}>
                <svg onClick={()=>{setBell(!bell)}} width="22" height="22" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path style={bellPath1} d="M20.9267 21.7832L19.2111 18.843C18.4189 17.486 17.997 15.9317 17.997 14.3534V11.7789C17.997 8.53083 15.883 5.78316 12.9956 4.89775V3.05474C13.0003 1.9191 12.1003 1 10.9988 1C9.89725 1 8.99727 1.9191 8.99727 3.05474V4.89775C6.10984 5.78316 4.00052 8.53083 4.00052 11.7789V14.3534C4.00052 15.9365 3.58334 17.486 2.79118 18.843L1.07091 21.7784C0.97716 21.9371 0.97716 22.1344 1.06622 22.2981C1.15528 22.4568 1.31934 22.5579 1.50215 22.5579H20.5001C20.6782 22.5579 20.847 22.4568 20.936 22.2981C21.0251 22.1393 21.0204 21.9371 20.9267 21.7832Z" stroke="#5E81F4" strokeWidth="2" strokeMiterlimit="10"/>
                    <path d="M14.2715 22.8238C14.2715 24.6313 12.8063 26.0965 10.9988 26.0965C9.19132 26.0965 7.72607 24.6313 7.72607 22.8238" stroke="#5E81F4" strokeWidth="2"/>
                </svg>
                </span>
            </div>
        // </div>
    )
}
