import './App.css';
import AboutPage from "./pages/aboutPage/AboutPage";


function App() {

    const info = {
        title: "REACT",
        body: "JavaScript REACT"
    }


    return (
        <div className="container">
            <AboutPage info = {info}/>
        </div>
    );
}

export default App;
