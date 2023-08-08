import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import { themeContext } from "./Context";
import { lazy, Suspense, useContext } from "react";
import ScrollToTop from "react-scroll-to-top";
import Heading from "./Components/Heading/Heading";

// const IntroLazy = lazy(() => import('./Components/Intro/Intro'));
// const ServicesLazy = lazy(() => import('./Components/Services/Services'));
// const PortfolioLazy = lazy(() => import('./Components/Portfolio/Portfolio'));
// const ContactLazy = lazy(() => import('./Components/Contact/Contact'));

function App() {

  const theme = useContext(themeContext);

  const darkMode = theme.state.darkMode;

  return (
    <div className="App" style={{background: darkMode? 'black': '', color: darkMode? 'white': ''}}>
      {/* <Navbar/>
      <Heading/>
      <Intro/>
      <Services/>
      <Portfolio/>
      <Contact/> */}
      <Navbar/>
      <section>
        <Heading/>
      </section>
      <section>
        <Intro/>
      </section>
      <section>
        <Services/>
      </section>
      <section>
        <Portfolio/>
      </section>
      <section>
        <Contact/>
      </section>
      {/* <Suspense fallback={<div>Loading...</div>} className='sections'>
        <IntroLazy/>
        <ServicesLazy/>
        <PortfolioLazy/>
        <ContactLazy/>
      </Suspense> */}
      <ScrollToTop smooth className="ScrollToTop"/>


      {/* <Experience/> */}
      {/* <Works/> */}
      {/* <Footer/> */}
    </div>
  );
};

export default App;
