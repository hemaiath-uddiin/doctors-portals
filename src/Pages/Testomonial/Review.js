import React from 'react';

const Review = ({review}) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                 
                    <p> {review.des}</p>
                    <div className="">
                        <div class="avatar mt-5 flex justify-around">
                            <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src= {review.img} alt="img"/>
                            </div> 
                            <div className="review_name"> 
                                <h1> {review.name} </h1>
                                <p> {review.location} </p>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;