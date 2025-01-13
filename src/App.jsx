import './App.css';
import {BrowserRouter as Router,Switch,Route,Routes} from "react-router-dom";
import Navbar from './navbar/navbar';
import Home from './home/home';
import Sheets from './sheets/sheets';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path={"/"} element={<Home />}></Route>
            <Route path={"/sheets"} element={<Sheets />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
