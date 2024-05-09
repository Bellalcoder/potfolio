

import styled from "styled-components";
import Header from "./comonents/Header";
import Home from "./comonents/home/home.jsx";
import About from "./comonents/about/about.jsx";
import Skills from "./comonents/skills/skills.jsx";
import Services from "./comonents/services/service.jsx";
import Data from "./comonents/potfolio/data.jsx";
import Testimonial from "./comonents/testimonial/testimonial.jsx";
import Contact from "./comonents/contact/contact.jsx";
import Foooter from "./comonents/footer/footer.jsx";

import "./App.css";



const App = () => {



  return (
    <>
      <Maincontainer>
       
       <div>

      {/*========= Header section ===============*/}  
      <Header/>
      {/*========= Home section =================*/}  
      <Home/>
      {/*========= About section ================*/}  
      <About/>
      {/*========= Skills section ===============*/}  
      <Skills/>
      {/*========= Services section =============*/}  
      <Services/>
      {/*========= Data section =================*/} 
      <Data/>
      {/*========= Testimonial section ==========*/}  
      <Testimonial/>
      {/*========= Contact section ==============*/}  
      <Contact/>
      {/*========= Foooter section ==============*/}  
      <Foooter/>
      {/*========= Navmenu section ==============*/}  
     
        
       </div>

      </Maincontainer>
    </>
  )
}

export default App;

/* =============== profile Components Desing ================ */
const Maincontainer = styled.div `



`