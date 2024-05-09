

import styled from "styled-components";

import { FaFileDownload } from "react-icons/fa";
import { BiAward } from "react-icons/bi";
import { BiBriefcaseAlt } from "react-icons/bi";
import { FaHeadphonesAlt } from "react-icons/fa";



const about = () => {
  return (
    <>

     <Aboutcontainer id="about">
        <div>
            <div className="about-me">
               <h1>About me</h1>
               <p>my introduction</p>
            </div>

           <div className="about-container" >
               
              <div className="about">
                 <div className="images">
                    
                 </div>

                  <div className="main-info">
                     <div className="information">
                        <div className="details">
                              <BiAward className="bebo-icon" />
                              <h3>Exprience</h3>
                              <small> 2 years working</small>
                        </div>

                        <div className="details">
                              <BiBriefcaseAlt className="bebo-icon" />
                              <h3>Completed</h3>
                              <samll> 50 - project</samll>
                        </div>

                        <div className="details">
                              <FaHeadphonesAlt className="bebo-icon" />
                              <h3>Support</h3>
                              <samll> Online 24/7</samll>
                        </div>
                     </div>
                     <div className="button-text">
                        <p> I am frontend developer, i create web pages and many clients are happy with the projects carried out. and my working exprience  2 years </p>
                        <button>Download cv <FaFileDownload/> </button>
                     </div>
                 </div>
              </div>
           </div>
        </div>
     </Aboutcontainer>
    
    </>
  )
}

export default about;

const Aboutcontainer = styled.div `

padding: 50px;

.about-me {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
}

.about-me h1 {
   font-size: 30px;
   font-family: "poppins", sans-serif;
   font-weight: 800;
}

.about-me p {
   font-size: 13px;
   font-family: "poppins", sans-serif;
}

.about-container {
   display: flex;
   justify-content: center;
   align-items: center;
}

.about{
   display: flex;
   gap: 50px;
   margin-top: 50px;
}


@media (max-width: 768px) {
   .about{
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
   }

}

@media (max-width: 660px) {
  
   .about-me {
      
      
   }
}



/*==================== info container Desing ============== */


.information {
   display: flex;
   gap: 20px;
}

.details {
    border:  1px solid #5555553e;
    padding: 10px;
    text-align: center;
    border-radius: 5px;
    line-height: 20px;
    height: 100px;
    box-shadow: 5px 5px 5px #55555521, -5px -5px 5px #0000;
}

.details h3 {
    font-size: 15px;
    font-family: "poppins", sans-serif;
    color: #240A34;
}    

.details small {
   font-size: 13px;
   font-family: sans-serif;
}

.bebo-icon {
    font-size: 20px;
    color: #240A34;
}

.button-text{
   width: 350px;
}

.button-text p {
   padding-top: 20px;
   font-size: 15px;
   font-family: "poppins", sans-serif;
   line-height: 20px;
}

.button-text button {
   padding: 13px 20px;
   border: none;
   color: #000;
   font-size: 20px;
   border-radius: 30px;
   margin-top: 30px;
   display: flex;
   align-items: center;
   gap: 20px;
   box-shadow: 5px 5px 5px #55555514, -5px -5px 5px #55555511;
   border: 1px solid #5555552d;
   background-color: #fff;
}

@media (max-width: 768px) {

    .main-info{
      margin-top: 50px;
    }
    
    .information{
      margin-top: -50px;
    }

}

@media (max-width: 366px) {
 .button-text{
   width: 280px;
}

.information {
   display: grid;
   grid-template-columns: repeat(2,1fr);
}

}

/*============ images container Deisng =========== */

.about .images {
   background-image: url("/public/image/IMG_8903.JPG");
   background-position:center;
   background-size: cover;
   width: 330px;
   height: 300px;
   border-radius: 10px;
}

@media (max-width: 366px) {
   .about .images {
      width: 280px;
      height: 280px;
   }
   
  
   
}











`