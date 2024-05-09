

import styled from "styled-components";
import { BiBadgeCheck } from "react-icons/bi";


const frontend = () => {
  return (
    <>
      <Frontendcontaienr>
        <div>
            <div className="frontend-container">
                 <h3>Frontend developer</h3>
                <div className="frontend">
                   <div className="main-number">
                      <div className="number--skills">
                        <div className="skills-set">
                            <p> <BiBadgeCheck/> HTMl</p>
                        </div>
                        <div className="skills-set">
                          <p>  <BiBadgeCheck/> CSS</p>
                        </div>
                        <div className="skills-set">
                            <p> <BiBadgeCheck/> Javascript</p>
                        </div>
                    </div>
                   </div>

                   <div className="main-number">
                      <div className="number--skills">
                        <div className="skills-set">
                            <p> <BiBadgeCheck/> React</p>
                        </div>
                        <div className="skills-set">
                          <p>  <BiBadgeCheck/>Boostrap</p>
                        </div>
                        <div className="skills-set">
                            <p> <BiBadgeCheck/> Git</p>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
        </div>
      </Frontendcontaienr>
        
      
    </>
  )
}

export default frontend;

const Frontendcontaienr = styled.div `


.frontend-container{
  border: 1px solid #fff;
  border-radius: 10px;
  
}

.frontend-container h3 {
   text-align: center;
   padding-top: 20px;
   font-size: 17px;
   font-family: "poppins", sans-serif;
   color: #fff;
   background: #55555528;
}

.frontend {
    display: flex;
    gap: 70px;
    padding: 20px;
    border-radius: 10px;
    color: #fff;
    background: #55555528;
}

.number--skills {
    line-height: 30px;
    
}

.number--skills p {
  display: flex;
  align-items: center;
  gap: 10px;
}


`