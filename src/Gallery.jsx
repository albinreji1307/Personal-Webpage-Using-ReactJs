import Tabs from "./Tabs";
import Items from "./Items";
import Data from "./Data";
import React from 'react';
import NavF from "./Favnav";


import { useState } from "react";
function Gallery(){
    const [data, setData] = useState(Data);
    const categoryData = Data.map((value)=>{
          return value.category
     });
    const tabsData= ["all", ...new Set(categoryData)];
    
    const filterCategory=(category) =>{
        if(category==="all"){
            setData(Data);
            return;
        }
       const filteredData =  Data.filter((value)=>{
           return value.category === category;
       })
       setData(filteredData);
    }
    return(
     <div style={{marginTop:"0px", backgroundColor:""}}>
       
        <div className=" b1243567" >
      <div className="column bokkkk">
        <h2 class="bokk">Gallery</h2> 
        <NavF/>
            <div className="col-sm-1">
            </div>
            <div className="col-sm-10">
            <Tabs filterCategory={filterCategory} tabsData={tabsData}/>
            <Items data={data} />
            </div>
            <div className="col-sm-1">
            </div>
        </div>
           
       </div>
       </div>
    
    )
}
export default Gallery;
