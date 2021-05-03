import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashBoard from './pages/DashBoard/Dashboard'
import Settings from './pages/Settings/Settings'
import Messages from './pages/Messages/Messages'
import Grades from "./pages/Grades/Grades";

import Profile from "./pages/Profile/Profile";
import Header from "./components/Header/Header";
import CourseInfo from "./pages/CourseInfo/CourseInfo";

function App() {
  return <div className="App">
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/'>
          <DashBoard/>
        </Route>
        <Route exact path='/messages'>
          <Messages/>
        </Route>
        <Route exact path='/profile'>
          <Profile/>
        </Route>
        <Route exact path='/settings'>
          <Settings/>
        </Route>
        <Route exact path='/grades'>
          <Grades/>
        </Route>
        <Route exact path='/course/:courseId'>
          <CourseInfo/>
        </Route>
      </Switch>
    </Router>
  </div>;
}

export default App;
