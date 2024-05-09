
import styled from "styled-components";
import Social from "./social.jsx";
import Data from "./data.jsx";
import Profile from "./profile.jsx";
import logo from '../img/pexels-life-of-pix-42408.jpg';



const home = () => {


  return (
     <>

     <Homecontainer>
        <div>
            <div className="home-container im" id="home" style={{backgroundImage: `url(${logo})`, backgroundRepeat: 'no-repeat', width: '100%', height:'400px',backgroundPosition: "center", backgroundSize: 'cover',}}>
                <div className="hero">
                    <Social/>
                    <Data/>
                    <Profile/>
                </div>
                
            </div>
        </div>
     </Homecontainer>
     
     </>
  )
}

export default home;


/* =============== home Components Desing ================ */

const Homecontainer = styled.div `

.home-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero {
    display: flex;
    justify-content: space-between;
    margin-left: 50px;
    margin-right: 70px;
}

/*============= Responsive css Media query max-width(768px) ============== */

@media (max-width: 570px) {
    
    .hero {
        flex-direction: column;
    }

    .home-container {
        padding-bottom: 0px;
    }
    
}



`