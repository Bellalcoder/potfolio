

import styled from "styled-components";

const card = ({menu}) => {
  return (
    <>
       
     <Cardcontainer>

        <div className="card-container">
            <div className="card">
                {
                    menu.map(item => (
                        <div className="car-menu" key={item.id}>
                            <img src={item.img} alt="" />
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
    
}

.car-menu{
    border: 1px solid #55555542;
    padding: 10px;
    border-radius: 10px;
}

.car-menu img{
  
    width: 250px;
    height: 250px;
    padding: 10px;
}

`