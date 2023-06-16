import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Admin from './admin-pages/Admin';
import AdminHome from './admin-pages/AdminHome'
import Menu from './admin-pages/Menu';
import Edit from './admin-pages/Edit';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}> </Route>
          <Route exact path='/login' element={<Login/>}> </Route>
          <Route exact path='/signup' element={<SignUp/>}> </Route>
          <Route exact path='/admin' element={<Admin/>}> </Route>
          <Route exact path='/admin-home' element={<AdminHome/>}> </Route>
          {/* <Route exact path='/add-food' element={<AddFood/>}> </Route> */}
          <Route exact path='/edit/:pid' element={<Edit/>}> </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
