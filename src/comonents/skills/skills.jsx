

import styled from "styled-components";

import Frontend from "./frontend.jsx"
import Tools from "./tools.jsx";

const skills = () => {
  return (
    <>

     <Skillscontainer id="skills">

        <div>
            <div className="skills-contaienr">

                <div className="demo-skills">
                    <h2>Skills</h2>
                    <p>my technical lavel </p>
                </div>

                <div className="skills">
                   <div className="front-end">
                      <Frontend/>
                   </div>
                   <div className="tools-menu">
                      <Tools/>
                   </div>
                </div>

            </div>
        </div>
     </Skillscontainer>
     
    </>
  )
}

export default skills;


const Skillscontainer = styled.div `

background-color: green;
padding: 50px;
margin-top: 50px;

.demo-skills {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
}

.demo-skills h2 {
    font-size: 30px;
    font-weight: 800;
    font-family: "poppins" , sans-serif;
}

.demo-skills p {
    font-size: 15px;
    font-family: "poppins", sans-serif;
}


.skills {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 50px;
}

@media (max-width: 676px) {
    
    .skills {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
  

`