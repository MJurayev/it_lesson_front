import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import Error404 from './components/Error404/Error404';
import UserLayout from './components/UserLayout/UserLayout';
import { ThemeContext } from './components/ThemedContext';
import { useState } from 'react';
// import Loader from './components/Loader/Loader';


function App() {
 
  const [dark, setDark] = useState(false)
  const toggleTheme =()=>{
    setDark(x=>{
      console.log(x)
      return !x
    })
  }
  return (
    <ThemeContext.Provider value={{dark, toggleTheme}}>
      <Router >
        <Switch>
        <Route exact theme={dark} path="/">
            <MainPage />
        </Route>
        <Route path="/courses">
            <UserLayout />
        </Route>
        <Route path='*'>
            <Error404 />
        </Route>
        </Switch>
      </Router>
    </ThemeContext.Provider>

  
  );
}

export default App;
