import React from 'react';
import img from "../../../src/info/teeth.jpeg" 
import "./Service.css"
const Service = () => {

  const data = [
    {
      "id": 1,
      "title": "Flourid treatment",
      "img": img,
      "des": " Lorem ipsum dolor sit amet."

    },
    {
      "id": 2,
      "title": "cavity filling",
      "img": img,
      "des": " Lorem ipsum dolor sit amet."

    },
    {
      "id": 3,
      "title": "Teeth whitening",
      "img": img,
      "des": " Lorem ipsum dolor sit amet."

    }
  ]


  return (
    <> 
        <div className="service_title "> 
            <h1 className='text-4xl text-teal-500'> Our service</h1>
            <h2 className='text-2xl'>Service We Provide</h2>
         </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-12 mt-5'>
       
        {
          data.map((service) => {

            return (

              <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                  <img src={service.img} alt="Shoes" class="rounded-xl service_img" />
                </figure>
                <div class="card-body items-center text-center">
                  <h2 class="card-title"> {service.title}  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>

            )
          })
        }





      </div>
    </>
  );
};

export default Service;