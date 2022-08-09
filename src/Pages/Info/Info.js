import React from 'react';
import InfoCard from './InfoCard';
import img from "../../info/pexels-stas-knop-1198264.jpg"
const Info = () => {
    return (
         <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'> 
              <InfoCard img = {img} bgClass ="bg-emerald-400"></InfoCard>
              <InfoCard img = {img} bgClass ="bg-stone-800"></InfoCard>
              <InfoCard img = {img} bgClass ="bg-emerald-400"></InfoCard>
         </div>

      
    );
};

export default Info;