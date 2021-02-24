import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import Error404 from './components/Error404/Error404';
import UserLayout from './components/Layouts/UserLayout/UserLayout';
import { CourseProvider } from './dataServices/CoursesProvider';
import { ThemeProvider } from './dataServices/ThemeProvider';

function App() {
  return (
    <CourseProvider>
      <ThemeProvider>
        <Router >
          <Switch>
          <Route exact path="/">
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
      </ThemeProvider>
    </CourseProvider>
      
  );
}

export default App;
