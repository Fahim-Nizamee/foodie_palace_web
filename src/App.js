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
import AdminList from './admin-pages/AdminList';
import { CartProvider } from './components/ContextReducer';
import Cart from './pages/Cart';
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<Home />}> </Route>
            <Route exact path='/cart' element={<Cart/>} ></Route>
            <Route exact path='/login' element={<Login />}> </Route>
            <Route exact path='/signup' element={<SignUp />}> </Route>
            <Route exact path='/about-us' element={<AboutUs />}> </Route>
            <Route exact path='/privacy-policy' element={<PrivacyPolicy />}> </Route>
            <Route exact path='/admin' element={<Admin />}> </Route>
            <Route exact path='/admin-home' element={<AdminHome />}> </Route>
            <Route exact path='/food-add' element={<Menu />}> </Route>
            <Route exact path='/edit/:pid' element={<Edit />}> </Route>
            <Route exact path='/admin-list' element={<AdminList />} ></Route>
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
