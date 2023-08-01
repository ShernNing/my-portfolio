import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
import ScrollToTop from "react-scroll-to-top";
import Heading from "./Components/Heading/Heading";

function App() {

  const theme = useContext(themeContext);

  const darkMode = theme.state.darkMode;

  // const svg = document.getElementById('triangles');

  // svg.onclick = (e) => {
  //   const colors = ['red', 'green', 'blue']

  //   const rando = () => colors[Math.floor(Math.random() * colors.length)];

  //   document.documentElement.style.cssText = `
  //   --blue: ${rando()};
  //   --pink: ${rando()};
  //   `
  // }

  return (
    <div className="App" style={{background: darkMode? 'black': '', color: darkMode? 'white': ''}}>
      <Navbar/>
      <Heading/>
      <Intro/>
      <Services/>
      {/* <Experience/> */}
      {/* <Works/> */}
      <Portfolio/>
      <Contact/>
      {/* <Footer/> */}
      <ScrollToTop smooth className="ScrollToTop"/>
    </div>
  );
};

export default App;
