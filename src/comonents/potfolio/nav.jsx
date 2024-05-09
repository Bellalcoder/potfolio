

import { useState } from "react";
import styled from "styled-components";

const nav = ({setAllData,uniqueData , menu}) => {

   
  const [cateData, setCateData] = useState("");

  const handleData = (name) => {
    setCateData(name)
    const filterData = menu.filter(item => item.category === name );
    setAllData(filterData);
    
    if(filterData.length){
      setAllData(filterData);
    }else{
      setAllData(menu)
    }

  }

  return (
    <>

     <Navcontainer>
        <div className="nav-container">
          <div className="bottom-text">
            <h3>Potfoliow</h3>
            <p>My project items </p>
          </div>

          <div className="nav">
            <div className="item"  onClick={() =>  handleData("")} 
              style={{backgroundColor: name === cateData ? "blue" : ""}}
            >
               All 
            </div>

            {
               uniqueData.map((name, index) => (
                  <div className="item" key={index}
                  
                  onClick={() =>  handleData(name)}
                  style={{backgroundColor: name === cateData ? "blue" : ""}}
                     
                  >
                      {name}
                  </div>
               ))

               
            }

            
           
          </div>
        </div>
     </Navcontainer>

    </>
  )
}

export default nav;


const Navcontainer = styled.div `


.bottom-text{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.bottom-text h3 {
  font-size: 30px;
  font-weight: 800;
  font-family: "poppins", sans-serif;
}

.bottom-text p {
  font-size: 14px;
  font-family: "poppins", sans-serif;
}

.nav {

  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 50px;
  margin-top: 50px;

}



.item{

  padding: 10px 30px;
  background-color: #000;
  border-radius: 20px;
  color: #fff;
  font-family: "poppins", sans-serif;
  font-size: 14px;

}

@media (max-width: 613px) {
  .nav {
    display: flex;
    flex-wrap: wrap;
  }
}

`