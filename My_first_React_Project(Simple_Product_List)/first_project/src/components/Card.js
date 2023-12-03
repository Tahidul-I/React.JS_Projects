import React from 'react';

function Card(props){
    return(
        <div className='root_card' key={props.id}>
            <img src={props.image} height="240px" width="407px" alt="Product_images"/>
            <div className="text-box">
            <p>{props.title}</p>
            <p className="separate-color">Price: ${props.price}</p>
            <p className="separate-color">Ratings: ${props.rate}/5</p>
            <p>{props.description}</p>
            <a className="button" href="#">Add To Cart</a>
            </div>
        </div>
    )
}

export default Card;