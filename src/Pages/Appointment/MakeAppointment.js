
import img from "../../info/pexels-daniel-frank-287237 (1).jpg"
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useState } from "react";
import { format } from "date-fns";
import { useEffect } from "react";

const MakeAppointment = () => {
    const [date, setDate] = useState(new Date())
    const [service, Setservice] = useState([])
    useEffect(() => {
        fetch("service.json")
            .then(res => res.json())
            .then(data => Setservice(data))

    }, [])

    return (
        <>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} alt="img" class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}

                        />

                    </div>


                </div>


            </div>
            <div className="available_slot">
                <h2 className="text-center"> Appoitment are Availabe in {format(date, "PP")}</h2>

            </div>
            <div class="card bg-base-100 shadow-xl  grid grid-cols-1 lg:grid-cols-3 px-12 gap-4 ">
                  { 
                    service.map((service)=>{ 
                        const {name,slots} = service
                        return( 
                            <div class="card-body">
                            <h2 class="card-title"> {name}</h2>
                            <p> {slots.length?<span>{slots[0]}</span>: 
                             <span> No slots are available </span>
                            } </p> 
                            <p> Available slots {slots.length}</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                          )
                    })
                  }
            </div>

        </>



    );
};

export default MakeAppointment;