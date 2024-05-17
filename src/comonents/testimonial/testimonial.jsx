    


import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import testimonial1 from "../../images/testimonial1.jpg"
import testimonial2 from "../../images/testimonial2.jpg"

  
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
                       <img src="https://images.pexels.com/photos/775279/pexels-photo-775279.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                       <h3>
                        Jhon Doe
                        <FaStar className="star"/>
                        <FaStar className="star"/>
                        <FaRegStarHalfStroke className="star" />
                       </h3>
                       <p> A really good jobs. all aspects of the projects where followed step and with good results.</p>
                    </div>

                    <div className="item">
                       <img src={testimonial1} alt="" />
                       <h3>
                        Harry Cilnton
                        <FaStar className="star"/>
                        <FaStar className="star"/>
                        <FaRegStarHalfStroke className="star" />
                       </h3>
                       <p> A really good jobs. all aspects of the projects where followed step and with good results.</p>
                    </div>

                    <div className="item">
                       <img src={testimonial2} alt="" />
                       <h3>
                        Sara Cill
                        <FaStar className="star"/>
                        <FaStar className="star"/>
                        <FaRegStarHalfStroke className="star" />
                       </h3>
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
      
      width: 100%;
      padding:50px ;
      
    }
  
    .item {
      
       box-shadow: 2px 2px 2px #5555551a, -2px -2px 2px #55555518;
       border-radius: 20px;
       padding: 15px;
       margin: 10px;

       img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
       }
    }
    
    .item h3 {
        font-size: 20px;
        font-weight: 800;
        font-family: "poppins", sans-serif;

        .star {
          font-size: 15px;
          margin-left: 5px;
          color: #f3b304;
        }
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