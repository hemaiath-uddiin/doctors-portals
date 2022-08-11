import React from 'react';
import InfoCard from './InfoCard';
import img from "../../info/pexels-stas-knop-1198264.jpg"
const Info = () => {
    return (
         <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-12'> 
              <InfoCard cardTitle= "Opening Hour" img = {img} bgClass ="bg-emerald-400"></InfoCard>
              <InfoCard cardTitle="visite our location" img = {img} bgClass ="bg-stone-800"></InfoCard>
              <InfoCard cardTitle="Contact Us" img = {img} bgClass ="bg-emerald-400"></InfoCard>
         </div>

      
    );
};

export default Info;