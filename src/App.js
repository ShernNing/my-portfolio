import Navbar from "./Components/Navbar/Navbar";
import './App.css'
// import Intro from "./Components/Intro/Intro";
// import Services from "./Components/Services/Services";
// import Portfolio from "./Components/Portfolio/Portfolio";
// import Contact from "./Components/Contact/Contact";
import { themeContext } from "./Context";
import { lazy, Suspense, useContext } from "react";
import ScrollToTop from "react-scroll-to-top";
import Heading from "./Components/Heading/Heading";
import { BrowserRouter } from "react-router-dom";

const IntroLazy = lazy(() => import('./Components/Intro/Intro'));
const ServicesLazy = lazy(() => import('./Components/Services/Services'));
const PortfolioLazy = lazy(() => import('./Components/Portfolio/Portfolio'));
const ContactLazy = lazy(() => import('./Components/Contact/Contact'));

function App() {

  const theme = useContext(themeContext);

  const darkMode = theme.state.darkMode;

  return (
    <BrowserRouter>
      <div className="App" style={{background: darkMode? 'black': '', color: darkMode? 'white': ''}}>
        <Navbar/>
        <Heading/>
        <Suspense fallback={<div>Loading...</div>}>
          <IntroLazy/>
          <ServicesLazy/>
          <PortfolioLazy/>
          <ContactLazy/>
        </Suspense>
        <ScrollToTop smooth className="ScrollToTop"/>

        {/* <Routes>
          <Route path='heading' element={<Heading/>}/>
          <Route path="intro" element={
            <Suspense fallback={<div>Loading...</div>}>
              <IntroLazy/>
            </Suspense>
          }/>
          <Route path="services" element={
            <Suspense fallback={<div>Loading...</div>}>
              <ServicesLazy/>
            </Suspense>
          }/>
          <Route path="portfolio" element={
            <Suspense fallback='Loading...'>
              <PortfolioLazy/>
            </Suspense>
          }/>
          <Route path="contact" element={
            <Suspense fallback='Loading...'>
              <ContactLazy/>
            </Suspense>
          }/>
        </Routes> */}
        {/* <Experience/> */}
        {/* <Works/> */}
        {/* <Footer/> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
