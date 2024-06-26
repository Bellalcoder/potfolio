

import styled from "styled-components";
/*======= import react icons ===================== */
import { FaArrowDown } from "react-icons/fa";


const scroll = () => {
  return (
    <>
      <Scrollcontainer>
         <div>
            <div className="scroll">
              <div className="scroll-menu">
                 <a href="#" className="home__scroll-mouse">
                    <svg
                        width="32px"
                        height="32px"
                        viewBox="0 0 247 390"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        style={{
                        fillRule:  "evenodd",
                        clipRule:  "evenodd",
                        strokeLinecap:  "round",
                        strokeLinejoin:  "round",
                        strokeMiterlimit:  "1.5",
                        }}
                        
                       
                    >
                        <path
                        className="wheel"
                        d="M123.359,79.775l0,72.843"
                        style={{
                            fill: "none",
                            stroke: "#000",
                            strokeWidth: "20px",
                        }}
                            
                        
                        ></path>
                        <path
                        id="mouse"
                        d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                        style={{
                            fill: "none",
                            stroke: "#000",
                            strokeWidth: "20px",
                        }}
                        ></path>
                    </svg>
                    <p>Scroll Down <FaArrowDown className="faarrow"/> </p>
                 </a>
              </div>
            </div>
         </div>
      </Scrollcontainer>
    </>
  )
}

export default scroll;

/* =============== profile Components Desing ================ */

const Scrollcontainer = styled.div `

.scroll .scroll-menu {
   margin-top: 50px;
}

.scroll .scroll-menu .wheel{
    animation: scroll 2s ease infinite;
}

.scroll .scroll-menu a {
    display: flex;
    gap: 10px;
    text-decoration:none;
    align-items: center;
}

.scroll-menu a p {
   font-size: 15px;
   font-family: "poppins", sans-serif;
   color: #000;
   font-weight: bold;
}

.scroll-menu .faarrow {
    font-size: 12px;
}



@keyframes scroll {
    
   0%{
     transform: translateY(0);
   } 

   30% {
     transform: translateY(3.75rem);
   }
}



/*============= Responsive css Media query max-width(768px) ============== */

@media (max-width: 768px) {
  .scroll .scroll-menu {
    margin-left: -0px;
    margin-left: 70px;
    
  }

}

@media (max-width:660px) {
   .scroll .scroll-menu {
    margin-left: 170px;
    display: none;
  }
}


`