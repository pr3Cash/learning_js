import React from "react";

export const Work:React.FC = () =>{
    
    const electron = (window as any).electron;
    return ( 
        
        <div>THis is from work page 
            <li><a href="/">Home</a></li>
        
        this is the home dir @ {electron.homeDir()} <br />
        os version @ {electron.osVersion()} <br />
        the arch @ {electron.arch()}
        
        </div>
    
        
    )
    
}