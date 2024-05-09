

import styled from "styled-components";
import {useState} from "react";
/*======= import react icons ===================== */
import { AiOutlineAppstore } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { PiFileTextLight } from "react-icons/pi";
import { BiCake } from "react-icons/bi";
import { CiImageOn } from "react-icons/ci";
import { AiOutlineSend } from "react-icons/ai";


const Header = () => {

  /*====== Click button and  show-menu ======== */
  const [toggle, showMneu] = useState(false);

  return(
    <>

    <Mainheader>
        <div>
            <div className="header">
                <div className="logo"><a href="#">Bellal</a></div>
                <nav>
                    
                    <div className={toggle ? "navbar show-menu" : "navbar"} >
                        <ul>
                            <li> <AiOutlineHome className="list-icon"/>  <a href="#home" className="active">Home</a></li>
                            <li> <AiOutlineUser className="list-icon" /> <a href="#about">About</a> </li>
                            <li> <PiFileTextLight className="list-icon" /> <a href="#skills">Skills</a></li>
                            <li> <BiCake className="list-icon"/> <a href="#service">Service</a></li>
                            <li> <CiImageOn className="list-icon"/> <a href="#potfolio">Potfolio</a></li>
                            <li> <AiOutlineSend className="list-icon"/> <a href="#contact">Contact</a></li>
                        </ul>
                        <IoMdClose className="close" onClick={() => showMneu(!toggle)}/>
                    </div>
                </nav>
                <div className="icon" onClick={() => showMneu(!toggle)}>
                    <AiOutlineAppstore className="appstore"/>
                </div>
            </div>
        </div>
    </Mainheader>
    
    </>
  )
  
}

export default Header;

/*==================== Header Components Desing ================== */

const Mainheader = styled.div `

.header {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    
}

.header .logo a {
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
    padding-left: 50px;
    color: #000;
}

.header .navbar ul li {
    list-style: none;
    display: inline-block;
    margin-right: 40px;
}

.header .navbar ul li a {
    text-decoration: none;
    font-family : "poppins", sans-serif;
    color: #000;
    font-size: 15px;
    font-weight: 500;
}

.header .navbar ul li
.active{
  color: #000;
}

.header .navbar ul li a:hover{
    color: #555;
    transition: .3s;
}

.header .navbar ul .list-icon {
    display: none;
    cursor: pointer;
}

.header .icon  {
    display: none;
    cursor: pointer;
}

.header .navbar .close {
    display: none;
    cursor: pointer;
}

/*============= Responsive css Media query max-width(768px) ============== */

@media (max-width:768px) {
    
    .header {
        
        position: fixed;
        display: flex;
        bottom: -1px;
        right: -1px;
        width: 101%;
        border: 1px solid #55555528;
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
        background: white;
        height: auto;
        padding: 10px;
        z-index: 200;
        
    }

    .header .logo {
        display: none;
    }

    .header .logo a {
        color: #000;
    }
    
    .header .navbar ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr );
        column-gap: 6rem;
        margin-left: 60px;
    }
    

    .header .navbar ul .list-icon {
        display: block;
        color: #240a34;
        font-size: 18px;
        margin-bottom: 5px;
    }



    .header .navbar ul li a {
        font-size: 12px;
    }

    .header .navbar ul li {
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-right: 40px;
    }

    .header .navbar {
        position: relative;
        bottom: 0;
        width: 100%;
        padding-bottom: 50px;
        background: #fff;
        border: 1px solid #55555530;
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
        position: fixed;
        left: 0;
        bottom: -100%;
    }

    .header .navbar .close {
        display:block;
        position: absolute;
        right: 30px;
        bottom: 20px;
        font-size: 15px;
    }

    .header .logo {
        display: block;
    }

    .header .logo a{
        padding-left: 20px;
    }

    .header .icon  {
       display: block;
       margin-right: 20px;
       font-size: 20px;
    }

    /*===== show menu ======= */
    
    .navbar.show-menu {
        bottom: 0px;
    }
};


@media (max-width:490px) {
    
    .header .navbar ul {
       column-gap: 0rem;
       
    }
}

`