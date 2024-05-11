

import styled from "styled-components";
import potfolio from "../img/potfolio.jpg";

const card = ({menu}) => {
  return (
    <>
       
     <Cardcontainer>

        <div className="card-container" style={{backgroundImage: `url(${potfolio})`, backgroundRepeat: 'no-repeat', width: '100%', height:'auto',backgroundPosition: "center", backgroundSize: 'cover',}}>
            <div className="card">
                {
                    menu.map(item => (
                        <div className="car-menu" key={item.id}>
                            <img src={item.img} alt="item.id" />
                            <p>{item.title}</p>
                            <h3>{item.description}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
     </Cardcontainer>
    
    </>
  )
}

export default card;


const Cardcontainer = styled.div `

.card{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    padding-top: 30px;
    margin-top: 30px;
}

.car-menu{
    border-radius: 10px;
}

.car-menu img{
    width: 290px;
    height: 290px;
    border-top-right-radius: 5px ;
    border-top-left-radius: 5px ;
}

`