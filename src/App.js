import {Routes,Route} from "react-router-dom";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Mynavbar from "./components/Navbar";

import ListingPage from "./pages/List";
import HomePage from "./pages/Home";
import BookDelailPage from "./pages/Detail";

function App() {
 return(
    <div>
        <Mynavbar/>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
  <Route path="/register" element={<RegisterPage/>}/>
  <Route path="/login" element={<LoginPage/>}/>
  <Route path="/booklist" element={<ListingPage/>}/>
  <Route path="/book/view/:bookId" element={<BookDelailPage/>}/>
  </Routes>
  </div>
 )
}

export default App;
