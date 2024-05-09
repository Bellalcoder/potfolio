
import styled from "styled-components";
import Scroll from "./scroll.jsx"
/*======= import react icons ===================== */
import { AiOutlineSend } from "react-icons/ai";


const data = () => {
  return (
    <>

     <Datacontainer>

      <div>
        <div className="data-container">
           <div className="info">
              <h1> MD  Bellal Hosen </h1>
              <p className="web">Frontend web developer</p>
              <p className="about"> I'm creative designer and I'm very passionate and dedicated to my work </p>
              <div className="button">
                <button>Say Hello <AiOutlineSend/> </button>
              </div>
              
           </div>
           <Scroll/>
        </div>
      </div>

     </Datacontainer>
    
    </>
  )
}

export default data;


/* =============== data Components Desing ================ */

const Datacontainer = styled.div `


.info {
  width: 60%;
  margin-left: 120px;
 
}

.info h1 {
  font-size: 30px;
  font-family: "poppins", sans-serif;
  color: #fff;
}

.info p {
  padding-top: 10px;
  font-size: 17px;
  font-weight: 600;
  color: #fff;
}

.info .web{
  position: relative;
}

.info .web::before {
   position: absolute;
   content: "";
   width: 67px;
   height: 2px;
   background-color: #fff;
   bottom: -5px;
}

.info .about {
  font-size: 15px;
  font-family:sans-serif;
  padding-top: 10px;
  font-weight: 500;
  line-height: 20px;
}



.info span {
  font-family: "poppins", sans-serif;
  font-size: 16px;
}

.button  button {
  padding: 10px 20px;
  border: none;
  outline: none;
  background-color: #fff;
  color: #000;
  font-size: 14px;
  font-family: "poppins", sans-serif;
  font-weight: 600;
  margin-top: 30px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
}

/*============= Responsive css Media query max-width(768px) ============== */

@media (max-width:768px) {

.info {
   margin-left: 80px;
}

.info .about{
  font-size: 14px;
}

.info h1 {
  font-size: 20px;
}

.info .web{
  font-size: 15px;
}
    
}

@media (max-width: 570px) {
  
  .info {
    margin-left: 0px ;
    margin-top: 30px;
    width: 100%;
  }

}


`