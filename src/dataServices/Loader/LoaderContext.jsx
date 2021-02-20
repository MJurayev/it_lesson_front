import {useState, createContext} from 'react'

 export const Context = createContext()

//  import React from 'react';
 
 export default  function LoaderContext({child, value}) {
    const [loader, setloader] = useState(true)

   return (
     <>
     <Context.Provider value={{value}}>
         {child}
     </Context.Provider>
     </>
   );
 }
 