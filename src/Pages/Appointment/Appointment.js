import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../../src/info/pexels-cottonbro-5722157.jpg" 
import backgroundImg from "../../../src/info/pexels-daniel-putzer-633409.jpg"
const Appointment = () => {
    return (
        <div style={{ backgroundImage: `url(${backgroundImg})` }} className='flex justify-items-center items-center grid grid-cols-1 lg:grid-cols-2 mt-20 '>
            <div className="img flex-1 hidden lg:block  "> 
                <img className='mt-[-20px]' src={img} alt="" />
            </div> 
            <div className="appoint_details flex-1 text-white"> 
               <h1 className='text-2xl font-bold'> Appointment</h1> 
               <h2 className='text-2xl font-bold'> Make a Appointment Today</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt illum exercitationem necessitatibus id tenetur molestiae, repellendus totam laboriosam blanditiis veritatis ipsa! Consequatur, rem necessitatibus asperiores similique provident ullam reprehenderit accusantium natus quam, voluptatibus eveniet autem ipsum deleniti! Sit, quaerat sint?</p> 
               <button class="btn btn-primary mt-5"> <Link to ="/appoint" > Get started</Link> </button>
            </div>
        </div>
    );
};

export default Appointment;