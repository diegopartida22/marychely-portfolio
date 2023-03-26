//import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
// import Button from "react-bootstrap/Button";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <HomePage />
      <AboutMe />
      <Services />
    </div>
  );
}

export default App;
