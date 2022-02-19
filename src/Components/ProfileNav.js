import Reacts from 'react'
import "../App.css";
import {ProfileNavData} from './ProfileNavData'

 function ProfileNav(){
   return(
     <div className="ProfileNav">
       <ul className="ProfileNavList">
     {ProfileNavData.map((val, key)=>{
       return(
        <li key={key} 
        className="row" 
        id={window.location.pathname == val.link ? "active" : ""} 
        onClick={()=> {window.location.pathname = val.link}}>
          {" "}
          <div id="icon">{val.icon}</div>{" "}
          <div>
            {val.title}
          </div>
       </li>);
       
     })}
     </ul>
     </div>
     );
   
 }

 export default ProfileNav