import React from 'react';
import Data from '../product_data.json';
import Card from './Card.js';
import '../index.css';

function App(){

    let items = [];
    // for(let x=0; x<Data.length; x++){
    //     items.push(<Card title={Data[x].title} name={Data[x].name} />)
    // }
    // items = Data.map((item)=>
    //     <Card title={item.title} name={item.name} />
    // )
    items = Data.map((item)=>{
        return(
            <div>
                <Card id={item.id} title={item.title} price={item.price} description={item.description} image={item.image} rating={item.rating} />
            </div>
        )
    
        })


    return(
        <div className='main'>
            <h1 style={{textAlign:"center",color:"white"}}>BD Shop</h1>
            {items}

        </div>
    )
}

export default App;