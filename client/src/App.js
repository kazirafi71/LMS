import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import DashBoard from './pages/DashBoard/Dashboard'
import Settings from './pages/Settings/Settings'
import Messages from './pages/Messages/Messages'
import Grades from "./pages/Grades/Grades";
import Profile from "./pages/Profile/Profile";
import Header from "./components/Header/Header";
import CourseInfo from "./pages/CourseInfo/CourseInfo";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import TeacherDashboard from "./pages/Teacher/TeacherDashboard/TeacherDashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard/AdminDashboard";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


const Routing=()=>{
  const history=useHistory()
  const dispatch=useDispatch()
  const user=JSON.parse(localStorage.getItem("user"))
  console.log(user)
  useEffect(()=>{
    if(!user){
      history.push('/login')
    }else{
      dispatch({type:"SET__USER",payload:user})

    }


  },[])
  return(
    <Switch>
        <Route exact path='/'>
          <DashBoard/>
        </Route>
        <Route exact path='/teacher-dashboard'>
          <TeacherDashboard/>
        </Route>
        <Route exact path='/admin-dashboard'>
          <AdminDashboard/>
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
        <Route exact path='/login'>
          <Login/>
        </Route>
        <Route exact path='/register'>
          <Register/>
        </Route>
        <Route exact path='/course/:courseId'>
          <CourseInfo/>
        </Route>
      </Switch>

  )
}



function App() {
  return <div className="App">
    <Router>
      <Header/>
      <Routing/>
    </Router>
  </div>;
}

export default App;
