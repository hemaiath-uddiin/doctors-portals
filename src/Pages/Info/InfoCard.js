import React from 'react';

const InfoCard = ({img,bgClass}) => {
    return (
      
      
        <div class={`card lg:card-side shadow-xl  ${bgClass}`}>
        <figure><img src= {img} alt="Album"/></figure>
        <div class="card-body text-white">
          <h2 class="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          
        </div>
      </div>
    );
};

export default InfoCard;