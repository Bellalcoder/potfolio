
import styled from "styled-components";
/*======= import react icons ===================== */
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const social = () => {
  return (
    <>

     <Socialcontainer>
        <div>
           <div className="social">
              <a href="#"><FaGithub/></a>
              <a href="https://www.facebook.com/profile.php?id=100069168101670" target="blank"><FaFacebook/></a>
              <a href="#"><FaLinkedin/></a>
           </div>
        </div>
     </Socialcontainer>
    
    </>
  )
}

export default social;


/* =============== social Components Desing ================ */

const Socialcontainer = styled.div `

.social {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 20px;
   width: 50px;
   height: 150px;
   box-shadow: 5px 5px 5px #55555540, -5px -5px 5px #55555539;
   border-radius: 5px;
   background: black;
}

.social a {
   color: #fff;
   font-size: 20px;
}

.social a:hover {
   color: #ffffffd6;
   transition:  .3s ;
}

`