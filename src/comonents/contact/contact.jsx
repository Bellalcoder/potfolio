

import styled from "styled-components";

import { MdOutgoingMail } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BiPaperPlane } from "react-icons/bi";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const contact = () => {


   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_i16x1mr', 'template_47bgcjt', form.current, {
        publicKey: '7m18yeAHfgSpjfWh9',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }



  return (
     
    <>

     <Contactcontainer id="contact" >
        <div>

            <div className="contact-container">
                <div className="demo-text">
                    <h2>Get in touch</h2>
                    <p>Contact me</p>
                </div>
                <div className="contact">
                    <div className="talk-me">
                        <p>Talk to me</p>

                       <div className="message">
                          <MdOutgoingMail className="talk-icon" />
                          <p>mdbellalrand@gmail.com</p>
                          <a href="#" target="blank"><h4>write me <FaArrowRightLong/> </h4></a>
                       </div>

                       <div className="message">
                          <FaFacebook className="talk-icon"/>
                          <p>Md Bellal Hosen</p>
                          <a href="https://www.facebook.com/profile.php?id=100069168101670"><h4>write me <FaArrowRightLong /> </h4></a>
                       </div>

                       <div className="message">
                          <FaFacebookMessenger className="talk-icon"/>
                          <p>Md Bellal Hosen</p>
                          <a href="https://www.facebook.com/profile.php?id=100069168101670" target="blank"> <h4>write me <FaArrowRightLong/> </h4></a>
                       </div>

                       
                    </div>

                    <div className="input-aria">
                        <h4>write me your project</h4>
                       <div className="input">
                            <form ref={form} onSubmit={sendEmail}>

                                <p>Name</p>
                                <input type="text" name="user_name" placeholder="Insert your name" />

                                <p>Email</p>
                                <input type="email" name="user_email" placeholder="Insert your gmail" />

                                <p>Project</p>
                                <div className="textarea">
                                    <textarea name="message" placeholder="write your project"/>
                                </div>

                                <div className="button">
                                    <button type="submit" value="Send" >Submit <BiPaperPlane/></button>
                                </div>

                            </form>
                       </div>
                    </div>
                </div>
            </div>

        </div>
     </Contactcontainer>
    
    </>
  )
}

export default contact;


const Contactcontainer = styled.div`



.contact-container{
    background-color:#240A34;
    padding-top: 50px;
    padding-bottom: 50px;
}

.demo-text{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.demo-text h2 {
    font-size: 30px;
    font-weight: 800;
    font-family: "poppins", sans-serif;
    color: #fff;
}

.demo-text p {
    font-size: 15px;
    font-family: "poppins", sans-serif;
    color: #fff;
}

.contact{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin-top: 50px;
}

.talk-me p {
    font-size: 20px;
    font-family: "poppins",sans-serif;
    padding-bottom: 18px;
    text-align: center;
    color: #fff;
}

.contact .message {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    padding: 10px;
    margin-bottom: 20px;
    line-height: 20px;
    border-radius: 10px;
    background-color:#240A34;
    box-shadow: 5px 5px 4px #55555518 , -5px -5px 4px #55555518;
    color: #fff;
    border: 1px solid #fff;
}

.message .talk-icon {
    font-size: 25px;
    margin-bottom: 10px;
}

.message a {
    text-decoration: none;
    color: #fff;
    transition: .3s ;
}

.message a:hover {
    color: #8d04e9;
}

.message p {
    font-size: 15px;
    font-family: "poppins",sans-serif;
}

.message h4 {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 15px;
    font-family: "poppins",sans-serif;
    font-weight: 500;
}

/*=========== input area desing ============= */

.input-aria h4 {
   font-size: 20px;
   font-family: "poppins", sans-serif;
   font-weight: 500;
   padding-bottom: 20px;
   text-align: center;
   color: #fff;
}



.input-aria .input form  p {
    width: 50px;
    height: 20px;
    text-align: center;
    background-color:#240A34;
    color: #fff;
    margin-top: -8px;
    margin-left: 20px;
    position: absolute;
    font-family: "poppins", sans-serif;
    font-size: 13px;
}


.input-aria .input input {
    padding: 13px;
    border:1px solid #fff;
    background-color:#240A34;
    outline: none;
    border-radius: 5px;
    margin-bottom: 20px;
    display: flex;
    width: 300px;
    box-shadow: 5px 5px 4px #55555518 , -5px -5px 4px #55555518;
    color: #fff;
}

.input-aria .input input::placeholder{
    color:#fff;
}

.input-aria .input .textarea textarea {
    padding-left: 10px;
    padding-top: 15px;
    font-size: 15px;
    font-family: "poppins", sans-serif;
    border: 1px solid #fff;
    outline: none;
    height: 180px;
    width: 300px;
    border-radius: 5px;
    background-color:#240A34;
    color: #fff;
}

.input-aria .input .textarea textarea::placeholder{
    color: #fff;
}


.input-aria .input .button button {
    padding: 13px 50px;
    border: none;
    background-color: #240A34;
    color: #ffffffe6;
    font-size: 15px;
    font-family: "poppins", sans-serif;
    border-radius: 5px;
    margin-top: 20px;
    margin-bottom: 35px;
    transition:  .3s ;
    border: 1px solid #fff;
}

.input .button button:hover {
    background-color: #000000d1;
}


@media (max-width: 768px){
    .contact {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

@media (max-width: 660px){
    .contact {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}





`