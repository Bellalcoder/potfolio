

import styled from "styled-components";

const profile = () => {
  return (
    <>

    <Profilecontainer>
      <div>
        <div className="profile">
           <div className="image">
              <div className="img"></div>
           </div>
        </div>
      </div>
    </Profilecontainer>
    
    </>
  )
}

export default profile;


/* =============== profile Components Desing ================ */


const Profilecontainer = styled.div `

.profile .image .img {
  width: 200px;
  height: 200px;
  background: red;
  background-image: url("/public/image/IMG_8903.JPG");
  background-position: center;
  background-size: cover;
  border: 5px solid #555;
  border-radius: 50%;
  animation : profile 8s ease-in-out infinite 1s ;
  opacity: 0;
  visibility: hidden;
}

@keyframes profile {
  0%{
    border-radius: 60% 40% 30% 70%/ 60% 30% 70% 40%;
  }
  50%{
    border-radius: 30% 60% 70% 40%/ 50% 60% 30% 60%;
  }
  100%{
    border-radius: 60% 40% 30% 70%/ 60% 30% 70% 40%;
  }
}


@media (max-width:660px) {
  .profile .image .img {
    width: 150px;
    height: 150px;
  }
}





`