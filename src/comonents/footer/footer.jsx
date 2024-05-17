

import styled from "styled-components";

import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaArrowUp } from "react-icons/fa";

const footer = () => {

  window.addEventListener("scroll", function() {

     const scrollUp = document.querySelector(".top-button");
     if(this.scrollY >= 560) scrollUp.classList.add("show-scroll")
     else scrollUp.classList.remove("show-scroll");

     console.log(scrollUp)

  })



  return (
    <>
      <Footercontainer>
        <div>
            <div className="footer-container">
               
                <a href="#home" className="top-button"><button> <FaArrowUp/> </button></a>
                
                <div className="footer">
                    <h3>Bellal</h3>
                    <div className="link">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#potfoliow">Potfoliow</a>
                    </div>
                        
                    <div className="footer-icon">
                      <a href="https://github.com/Bellalcoder" target="blank"><FaGithub className="foot-icon"/></a>
                      <a href="https://www.facebook.com/profile.php?id=100069168101670" target="blank"><FaFacebook className="foot-icon"/></a>
                      <a href="https://www.linkedin.com/in/md-bellal-coder-b53b08307/" target="blank"><IoLogoLinkedin className="foot-icon"/></a>

                    </div>
                    <p></p>
                </div>
            </div>
        </div>
      </Footercontainer>
    </>
  )
}

export default footer;

const Footercontainer = styled.div `

background-color: #000000f4;

.top-button button {

  position: fixed;
  right: 50px;
  bottom: 50px;
  padding: 13px;
  border: none;
  background-color: #000;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  z-index: 200;
  display: none;

}

/*========= show-scroll =========== */

.top-button .show-scroll{
  display: block;
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 30px;
  color: #fff;
}

.footer h3 {
  font-size: 20px;
  font-family: "poppins", sans-serif;
  padding-top: 20px;
}

.link a {
  color: #fff;
  text-decoration: none;
  display: inline-block;
  padding-left: 30px;
  font-family: "poppins", sans-serif;
  font-size: 14px;
  transition:  .3s ;

}

.link a:hover {
  color: #555;
}

.footer-icon {
  display: flex;
  gap: 30px;
  margin-bottom: 50px;
  margin-top: 20px;
}

.footer-icon .foot-icon {
  font-size: 20px;
  transition:  .3s ;
  color: #fff;
  cursor: pointer;
}

.foot-icon a {
  color: #fff;
}

.footer-icon .foot-icon:hover{
  color: #555;
}

`