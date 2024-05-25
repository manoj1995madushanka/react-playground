import './App.css';
import Homepage from "./Homepage";
import AboutMe from "./AboutMe";
import {Link, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <nav className="nav">
                <Link to="/" className="nav-item">Homepage</Link>
                <Link to="/about-me" className="nav-item">About Me</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Homepage/>}></Route>
                <Route path="/about-me" element={<AboutMe/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
