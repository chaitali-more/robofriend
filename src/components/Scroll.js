import React from 'react';

const Scroll = (props) =>{
   return(
       <div style = {{overflowY : 'scroll' ,border:'5px solid #06143e',height:'530px'}}>
           {props.children}
       </div>
   );
};

export default Scroll;