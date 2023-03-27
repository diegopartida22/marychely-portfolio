//import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
// import Button from "react-bootstrap/Button";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import ContactMe from "./components/ContactMe";
import Phrases from "./components/Phrases";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <HomePage />
      <AboutMe />
      <Services />
      <Phrases />
      <ContactMe />
    </div>
  );
}

export default App;
