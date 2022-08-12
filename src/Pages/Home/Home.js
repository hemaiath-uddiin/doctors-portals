import React from 'react';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner';
import Info from '../Info/Info';
import Loging from '../Loging';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>  
            <Info></Info> 
            <Service></Service> 
            <Appointment></Appointment>
        
        </div>
    );
};

export default Home;