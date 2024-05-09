
import styled from "styled-components";
import Social from "./social.jsx";
import Data from "./data.jsx";
import Profile from "./profile.jsx";


const home = () => {
  return (
     <>

     <Homecontainer>
        <div>
            <div className="home-container im" id="home">
                <div className="hero">
                    <Social/>
                    <Data/>
                    <Profile/>
                </div>

               <img src="/public/pexels-life-of-pix-42408.jpg" alt="" style={{width:"200px", }} />
                
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
  background-color: #000;
  padding: 50px;
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