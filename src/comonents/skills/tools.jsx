

import styled from "styled-components";
import { BiBadgeCheck } from "react-icons/bi";
const tools = () => {
  return (
    <>
      <Toolscontainer>
        <div>
           <div className="tools-container">
              <h3>Tools</h3>
              <div className="tools">
                 <div className="frontend">
                   <div className="number--skills">
                       <div className="skills-set">
                          <p> <BiBadgeCheck/> Fingma</p>
                       </div>
                       <div className="skills-set">
                         <p>  <BiBadgeCheck/> PHD</p>
                       </div>
                       <div className="skills-set">
                           <p> <BiBadgeCheck/> UI/ UX</p>
                       </div>
                   </div>

                   <div className="number--skills">
                       <div className="skills-set">
                          <p> <BiBadgeCheck/> Github</p>
                       </div>
                       <div className="skills-set">
                         <p> <BiBadgeCheck/> Netlify</p>
                       </div>
                       <div className="skills-set">
                           <p> <BiBadgeCheck/>Photoshop</p>
                       </div>

                   </div>
                </div>
              </div>
           </div>
        </div>
      </Toolscontainer>
    </>
  )
}

export default tools;

const Toolscontainer = styled.div `

.tools-container {
    border: 1px solid #ffffffc1;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    background: #55555528;
}

.tools-container h3 {
   text-align: center;
   font-size: 17px;
   font-family: "poppins", sans-serif;
   padding-top: 10px;
}




.frontend {
    display: flex;
    gap: 70px;
    border-radius: 10px;
    padding: 13px;
}

.number--skills {
    line-height: 30px;
    
}

.number--skills p {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  font-family: "poppins", sans-serif;
}

@media (max-width: 576px){
  
  .frontend {
    padding: 9px;
  }
  
}

`