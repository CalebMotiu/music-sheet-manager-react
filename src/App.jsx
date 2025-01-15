import './App.css';
import {BrowserRouter as Router,Switch,Route,Routes} from "react-router-dom";
import Navbar from './navbar/navbar';
import Home from './home/home';
import Sheets from './sheets/sheets';
import BlogDetails from './sheets/BlogDetails';
import Create from './sheets/Create';
import Login from './login/Login';
import Register from './login/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path={"/"} element={<Home />}></Route>
            <Route path={"/sheets"} element={<Sheets />}></Route>
            <Route path={"/create"} element={<Create />}></Route>
            <Route  path={"/sheets/:id"} element={<BlogDetails  />}></Route>
            {/* <Route path={"/login"} element={<Login/>}></Route>
            <Route path={"/register"} element={<Register/>}></Route> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
