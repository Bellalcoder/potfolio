
import dashboardimage from "../../images/dasboard2.jpg"
import ecommerceimage from "../../images/ecommerce.jpg"
import mordernsiteimage from "../../images/modernsite.jpg"
import demogamesiteimage from "../../images/demogamepage.jpg"
import mortysiteimage from "../../images/mortysite.jpg"
import demopotfoloimage from "../../images/demopotfolio.jpg"

import { TbListDetails } from "react-icons/tb";

import "./projectitem.css";
const projectitem = () => {
  return (
   <>

    <div className="project-item">
        <div className="project">
           <div className="top-text">
              <h2>Potfolio</h2>
              <span>My project item</span>
           </div>
           <div className="project-menu">
              
              <div className="main-project">
                 <div className="project-list">
                   <img src={dashboardimage} alt="" />
                   <div className="image-details">
                     <div className="left">
                        <TbListDetails className="list"/>
                     </div>
                     <div className="center">
                        <p>
                           This project create used React React-router-dom JSX CSS Sass not responsive 
                        </p>
                     </div>
                     <div className="right">
                        <button>
                          <a href="https://dashboardm3.netlify.app" target="blank">Demo site</a>
                        </button>
                     </div>
                   </div>
                 </div>
                
                 <div className="project-list">
                   <img src={ecommerceimage} alt="" />
                    <div className="image-details">
                     <div className="left">
                        <TbListDetails className="list"/>
                     </div>
                      <div className="center">
                         <p>
                           This project create used HTML CSS Bootsrap Javascript Jquery fully  responisve
                         </p>
                     </div>
                     <div className="right">
                        <button>
                          <a href="https://newfresfood.netlify.app" target="blank">Demo site</a>
                        </button>
                     </div>
                   </div>
                 </div>
                
                 <div className="project-list">
                   <img src={mordernsiteimage} alt="" />
                    <div className="image-details">
                     <div className="left">
                        <TbListDetails className="list"/>
                     </div>
                     <div className="center">
                        <p>
                           This project create used HTML CSS Bootsrap Javascript Jquery fully  responisve
                        </p>
                     </div>
                     <div className="right">
                        <button>
                          <a href="https://bellalwebsite1.netlify.app" target="blank">Demo site</a>
                        </button>
                     </div>
                   </div>
                 </div>
                
                 <div className="project-list">
                   <img src={demogamesiteimage} alt="" />
                    <div className="image-details">
                     <div className="left">
                        <TbListDetails className="list"/>
                     </div>
                     <div className="center">
                        <p>
                           This project create used React React-router-dom JSX CSS Sass fully responsive 
                        </p>
                     </div>
                     <div className="right">
                        <button>
                          <a href="https://demopotfoliom3.netlify.app" target="blank">Demo site</a>
                        </button>
                     </div>
                   </div>
                 </div>
                
                 <div className="project-list">
                   <img src={mortysiteimage} alt="" />
                    <div className="image-details">
                     <div className="left">
                        <TbListDetails className="list"/>
                     </div>
                     <div className="center">
                        <p>
                           This project create used HTML CSS Bootsrap Javascript Jquery fully  responisve
                        </p>
                     </div>
                     <div className="right">
                        <button>
                          <a href="https://mortysite.netlify.app" target="blank">Demo site</a>
                        </button>
                     </div>
                   </div>
                 </div>
                
                 <div className="project-list">
                   <img src={demopotfoloimage} alt="" />
                    <div className="image-details">
                     <div className="left">
                        <TbListDetails className="list"/>
                     </div>
                     <div className="center">
                         <p>
                           This project create used HTML CSS Bootsrap Javascript Jquery fully  responisve
                         </p>
                     </div>
                     <div className="right">
                        <button>
                          <a href="https://potfoliositenumber3.netlify.app" target="blank">Demo site</a>
                        </button>
                     </div>
                   </div>
                 </div>
                
                 
              </div>

           </div>
        </div>
    </div>
   
   </>
  )
}

export default projectitem