

import Nav from "./nav.jsx";
import Card from "./card.jsx";
import { useState } from "react";


const menu = [

    {
        id: 1,
        img: "/public/image/dasboard2.PNG",
        title: "hemo",
        category: "app",
    },
    {
        id: 2,
        title: "hemo",
        category: "app",
    },
    {
        id: 3,
        title: "hemo",
        category: "web",
    },
    {
        id: 4,
        title: "Demo project",
        category: "web",
    },
    {
        id: 5,
        title: "hemo",
        category: "react",
    },
    {
        id: 6,
        title: "hemo", 
        category: "react",
    },

    
    
]

const data = () => {
    
  
   const [allData, setAllData] = useState(menu);
   const uniqueData = [...new Set(menu.map(item => item.category))];

  return (
    <div id="potfolio">

        
        <Nav setAllData={setAllData} uniqueData={uniqueData} menu={menu} />
        <Card menu={allData} />
    
    </div>
  )
}

export default data