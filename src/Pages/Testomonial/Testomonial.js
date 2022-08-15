import React from 'react';
import Review from './Review';

const Testomonial = () => {
      const img ="https://placeimg.com/192/192/people" 
    const review = [ 
        { 
            id: 1 ,
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit exercitationem ut nobis id culpa neque maxime illo, facilis hic ex?" ,
            img: img,
            name: "smith" ,
            location: "chittagon"
        },  
        { 
            id: 2 ,
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit exercitationem ut nobis id culpa neque maxime illo, facilis hic ex?" ,
            img: img ,
            name: "smith" ,
            location: "chittagon"
        }, 
        { 
            id: 3 ,
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit exercitationem ut nobis id culpa neque maxime illo, facilis hic ex?" ,
            img: img ,
            name: "smith" ,
            location: "chittagon"
        },




      ]
   
    return (
        <section className='px-12'>
           <div className="testomonia_title mt-[30px] text-xl font-bold text-teal-500  "> 
               <h2 > Testomonials</h2>
              <h1> What our Patients says</h1> 

           </div>     
           <div className="review grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5"> 
                   { 
                     review.map(review=> <Review key={review.id} review={review}> </Review> )
                   }
           
           </div> 
          

        </section>
    );
};

export default Testomonial;