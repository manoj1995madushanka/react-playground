import './App.css';
import Homepage from "./Homepage";
import AboutMe from "./AboutMe";

function App() {
    return (
        <div className="App">
            <nav className="nav">
                <a href="#" className="nav-item">Homepage</a>
                <a href="#" className="nav-item">About Me</a>
            </nav>
            <Homepage/>
            <AboutMe/>
        </div>
    );
}

export default App;
