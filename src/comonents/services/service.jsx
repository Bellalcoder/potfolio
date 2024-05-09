

import styled from "styled-components";
import { useState } from 'react';

import { FaCode } from "react-icons/fa";
import { BiSolidBookContent } from "react-icons/bi";
import { BiSolidEdit } from "react-icons/bi";
import { FaArrowCircleRight } from "react-icons/fa";
import { BiBadgeCheck } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";


const service = () => {

  const [menToggle, setToggle] = useState(false);
  const [towToggle, towSetToggle] = useState (false);
  const [threeToggle, threeSetToggle] = useState (false);
  

  return (
    <>

       <Servicecontainer id="service" >
          <div>
            <div className="service-container">
                  <div className="service-bottom">
                    <h2>Service</h2>
                    <p>What i offer </p>
                  </div>
                <div className="service">
                    <div className="three-menu">   
                        <BiSolidBookContent className="serviceicon"/>                     
                        <h3>Product Desiner</h3>

                        <div className="show-div" onClick={ () => setToggle(!menToggle)}  >
                          <p >Viwe more <FaArrowCircleRight/> </p>
                        </div>

                        <div className={ menToggle ? "in-detials menu-show" : "in-detials"  }>
                          <div className="all-details">

                              <div className="itmes-menu">

                                <IoMdClose className="close-menu"  onClick={ () => setToggle(!menToggle)} />

                                  <div className="text-menu">
                                    <h2>Product Desiner</h2>
                                    <p>service with more than 3 years of exprience providing quality work to clients and companies</p>
                                  </div>

                                  <ul>
                                    <li> <BiBadgeCheck/> I develop the user interface</li>
                                    <li> <BiBadgeCheck/> Web page development.</li>
                                    <li> <BiBadgeCheck/> I create us element interface </li>
                                    <li> <BiBadgeCheck/> I position your company brand</li>
                                    <li> <BiBadgeCheck/> Desing and morckups of products for companies</li>
                                  </ul>

                              </div>
                          </div>
                        </div>
                    </div>

                    <div className="three-menu">
                        <FaCode className="serviceicon"/>                  
                       <h3>Ui/Ux Designer</h3>
                       
                      <div className="show-div" onClick={() => towSetToggle(!towToggle)}  >
                        <p >Viwe more <FaArrowCircleRight/> </p>
                      </div>

                      <div className={ towToggle ? "in-detials menu-show" : "in-detials"  }>
                        <div className="all-details">

                            <div className="itmes-menu">

                              <IoMdClose className="close-menu"  onClick={ () => towSetToggle(!towToggle)} />

                                <div className="text-menu">
                                  <h2>Ui/Ux Designer</h2>
                                  <p>service with more than 3 years of exprience providing quality work to clients and companies</p>
                                </div>

                                <ul>
                                  <li> <BiBadgeCheck/> I develop the user interface</li>
                                  <li> <BiBadgeCheck/> Web page development.</li>
                                  <li> <BiBadgeCheck/> I create us element interface </li>
                                  <li> <BiBadgeCheck/> I position your company brand</li>
                                  <li> <BiBadgeCheck/> Desing and morckups of products for companies</li>
                                </ul>

                            </div>
                        </div>
                      </div>

                    </div>

                    <div className="three-menu"> 
                       <BiSolidEdit  className="serviceicon"/>             
                       <h3>Visual Designer</h3>

                        <div className="show-div" onClick={()=> threeSetToggle(!threeToggle)}  >
                          <p >Viwe more <FaArrowCircleRight/> </p>
                        </div>

                        <div className={ threeToggle ? "in-detials menu-show" : "in-detials"  }>
                        <div className="all-details">

                            <div className="itmes-menu">

                              <IoMdClose className="close-menu" onClick={()=> threeSetToggle(!threeToggle)} />

                                <div className="text-menu">
                                  <h2>Visual Designer</h2>
                                  <p>service with more than 3 years of exprience providing quality work to clients and companies</p>
                                </div>

                                <ul>
                                  <li> <BiBadgeCheck/> I develop the user interface</li>
                                  <li> <BiBadgeCheck/> Web page development.</li>
                                  <li> <BiBadgeCheck/> I create us element interface </li>
                                  <li> <BiBadgeCheck/> I position your company brand</li>
                                  <li> <BiBadgeCheck/> Desing and morckups of products for companies</li>
                                </ul>

                            </div>
                        </div>
                      </div>

                     
                        
                    </div>
                </div>
            </div>
          </div>
       </Servicecontainer>
    
    </>
  )
}

export default service;


const Servicecontainer = styled.div `

 
  
  .in-detials {
    display: none;
    z-index: 200;
  }

  /* ======= show menu ========== */
  .menu-show{
    display: block;
  }

  
  .service-bottom{
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     margin-top: 50px;
  }

  .service-bottom h2 {
    font-size: 30px;
    font-weight: 800;
    font-family: "poppins", sans-serif;
  }

  .service-bottom p {
    font-family: "poppins", sans-serif;
    font-size: 13px;
    cursor: pointer;
  }
  .service{
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 50px;
   padding-bottom:50px;
   padding-top: 60px;
   
  }

  .show-div p:hover {
    color: #8a06e2;
    transition:  .3s ;
  }

  .three-menu {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   border: 1px solid #55555545;
   padding: 40px;
   line-height: 40px;
   border-radius: 5px;
  }

  .three-menu .serviceicon{
    font-size: 22px;
    color: #000000da;
  }

  .three-menu h3{
    font-size: 17px;
    font-family: "poppins",sans-serif;
    color: #000000d3;
  }

  .three-menu p{
    font-size: 15px;
    font-family: "poppins",sans-serif;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }

  .in-detials .all-details{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #555555;
    height: 100Vh;
    width: 100%;
    position: fixed;
    left: 0px;
    top: 0px;
    opacity: 1;
    visibility: visible;
    transition: .3s ;
  }

  .itmes-menu {
    background-color: #fff;
    width: 400px;
    padding: 20px;
    border-radius: 10px;
    position: relative;
  }

  .itmes-menu .close-menu {
    position: absolute;
    right:20px;
    top: 20px;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    color: #fff;
    border-radius: 2px;
    font-size: 18px;
    cursor: pointer;
  }
    
  .text-menu h2{
    text-align: center;
    font-family: "poppins", sans-serif;
  }

  .text-menu p {
    text-align: center;
    line-height: 20px;
    font-family: "poppins", sans-serif;
  }

  .itmes-menu ul{
      margin-top: 20px;
  }
  
  .itmes-menu ul li {
    list-style: none;
    line-height: 30px;
    display: flex;
    align-items: center;
    font-family: "poppins", sans-serif;
    font-size: 15px;
    gap: 10px;
  }

  @media (max-width: 768px) {
    .service {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin: 0px 20px 20px ;
      gap: 20px;
    }
  }

  @media (max-width: 500px) {
    .service {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      margin: 0px 20px 20px ;
      gap: 20px;
    }

    .itmes-menu ul li {
      display: block;
    }

    .itmes-menu{
      width: 300px;
      margin-bottom: 60px;
    }



  }







`