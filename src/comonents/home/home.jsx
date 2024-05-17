
import styled from "styled-components";
import Social from "./social.jsx";
import Data from "./data.jsx";
import logo from '../../images/homebackground.jpg';

const home = () => {

  return (
    <>

     <Homecontainer>
        <div>
            <div className="home-container im" id="home" style={{backgroundImage: `url(${logo})`, backgroundRepeat: 'no-repeat', width: '100%', height:'400px',backgroundPosition: "center", backgroundSize: 'cover'}}>
                <div className="hero">
                    <Social/>
                    <Data/>
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
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    padding: 10px;
    width: 100%;
}

/*============= Responsive css Media query max-width(768px) ============== */

@media (max-width: 342px) {

}



`