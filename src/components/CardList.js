import React from 'react';
import Card from './Card';
const CardList = ({robots}) => {
        // const cardArray = robots.map((user,i) =>{
        //     return(
        //      <Card 
        //     key={robots[i].id} 
        //     id={robots[i].id} 
        //     name={robots[i].name} 
        //     email={robots[i].email}
        //     />
        //     );
        // })
        // if(true){
        //     throw new Error('NOOOOOOO!');
        // }
    return(
        <div>
            {/* {cardArray} */}
            {
                robots.map((user,i) =>{
                return(
                <Card 
                key={robots[i].id} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email}
                />
                );
                })
             }   
        </div>
    );    
    
}

export default CardList;