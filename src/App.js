import './App.css';
import Homepage from "./Homepage";
import AboutMe from "./AboutMe";
import {Link, Route, Routes} from "react-router-dom";
import Contact from "./Contact";
import cat from './assets/images/img.png';
import MediaPlayer from "./MediaPlayer";
import AssPlayer from "./MediaPlayerAssignment";

function App() {

    const randomImageUrl = "https://th-thumbnailer.cdn-si-edu.com/ii_ZQzqzZgBKT6z9DVNhfPhZe5g=/fit-in/1600x0/filters:focal(1061x707:1062x708)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/55/95/55958815-3a8a-4032-ac7a-ff8c8ec8898a/gettyimages-1067956982.jpg";

    return (
        <div className="App">
            <nav className="nav">
                <Link to="/" className="nav-item">Homepage</Link>
                <Link to="/about-me" className="nav-item">About Me</Link>
                <Link to="/contact" className="nav-item">Contact</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Homepage/>}></Route>
                <Route path="/about-me" element={<AboutMe/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
            </Routes>

            <h1>
                Task: add three images with some styling
            </h1>
            <img height={200} src={cat} alt="An image of the cat"/>
            <img height={200} src={require("./assets/images/img.png")} alt="An image of the cat"/>
            <img height={200} src={randomImageUrl} alt="An image of the cat"/>

            <br/>
            <MediaPlayer/>

            <br/>
            <AssPlayer/>
        </div>
    );
}

export default App;
