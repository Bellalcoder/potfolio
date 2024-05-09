    


import styled from "styled-components";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

  
  const testimonial = () => {

    const option = {

        loop:true,
        margin:10,
        dotsEach: true,
        autoplay:true,
        responsive:{
           
            
           1025: {
             items: 3,
           },

           636: {
             items: 2,
           },

           300: {
             items: 1,
           }
        }
    }

    return (
      <>

      <Testimonialcontainer>
           <div>
                <OwlCarousel className='owl-theme' {...option}>
                    <div className="item">
                       
                       <h3>Jhon Doe</h3>
                       <p> A really good jobs. all aspects of the projects where followed step and with good results.</p>
                    </div>

                    <div className="item">
                       
                       <h3>Harry Cilnton</h3>
                       <p> A really good jobs. all aspects of the projects where followed step and with good results.</p>
                    </div>

                    <div className="item">
                       
                       <h3>Sara Cill</h3>
                       <p> A really good jobs. all aspects of the projects where followed step and with good results.</p>
                    </div>

                   
                </OwlCarousel>;

           </div>
      </Testimonialcontainer>

      </>
    )
  }
  
  export default testimonial;


  const Testimonialcontainer = styled.div `

    .owl-theme{
      margin-top: 50px;
      margin-bottom: 50px;
      width: 100%;
      padding:50px ;
    }
  
    .item {
       background: #fff;
       border: 1px solid #55555528;
       border-radius: 20px;
       padding: 10px;
       padding-left: 30px;
       padding-bottom: 20px;
    }
    
    .item h3 {
        font-size: 20px;
        font-weight: 800;
        font-family: "poppins", sans-serif;
        padding-top: 20px;
    }

    .item p {
        font-size: 15px;
        font-family: "poppins", sans-serif;
        padding-top: 10px;
    }

    .item  .owl-theme{
        padding: 0;
    }
    
  `