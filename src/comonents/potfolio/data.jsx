

import Nav from "./nav.jsx";
import Card from "./card.jsx";
import { useState } from "react";

const menu = [

    {
        id: 1,
        title: "hemo",
        img: "https://images.unsplash.com/photo-1710942272377-22ee69803e8e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D",
        category: "app",
    },
    {
        id: 2,
        title: "hemo",
        img: "https://images.unsplash.com/photo-1711211118827-c889adafc9af?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D",
        category: "app",
    },
    {
        id: 3,
        title: "hemo",
        img: "https://images.unsplash.com/photo-1707197066254-dafd518903f3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D",
        category: "web",
    },
    {
        id: 4,
        title: "hemo",
        img: "https://plus.unsplash.com/premium_photo-1711051475067-a34c5d9bd734?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D",
        category: "web",
    },
    {
        id: 5,
        title: "hemo",
        img: "https://plus.unsplash.com/premium_photo-1711051475067-a34c5d9bd734?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D",
        category: "react",
    },
    {
        id: 6,
        title: "hemo", 
        img: "https://plus.unsplash.com/premium_photo-1711051475067-a34c5d9bd734?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D",
        category: "react",
    },

    {
        id: 7,
        title: "hemo",
        img: "https://plus.unsplash.com/premium_photo-1711051475067-a34c5d9bd734?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D",
        category: "javascript",
    },
    {
        id: 8,
        title: "hemo", 
        img: "https://plus.unsplash.com/premium_photo-1711051475067-a34c5d9bd734?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D",
        category: "javascript",
    },
    
    {
        id: 9,
        title: "hemo", 
        img: "https://plus.unsplash.com/premium_photo-1711051475067-a34c5d9bd734?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D",
        category: "javascript",
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