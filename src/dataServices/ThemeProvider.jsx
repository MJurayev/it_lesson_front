import {createContext, useContext, useState } from 'react'
    const Context = createContext()
    const ThemeProvider=({children})=> {
    const [dark, setDark] = useState(false)
    const toggleTheme =()=>{
        setDark(x=>!x)
      }
    const value={
        dark, 
        toggleTheme
    }
    return (
        <Context.Provider value={value}>
            <Context.Consumer>
                {
                    ()=>children
                }
            </Context.Consumer>
        </Context.Provider>
    )
}

const useTheme=()=>{
    const {dark,toggleTheme} = useContext(Context)
    console.log(dark)
    return {dark, toggleTheme}
}

export {
    ThemeProvider,
    useTheme
}