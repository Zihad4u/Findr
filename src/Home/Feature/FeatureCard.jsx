// import React from 'react';

import { FaArrowAltCircleUp } from "react-icons/fa";

const FeatureCard = ({item}) => {
    console.log(item)
    const {name,tags,image}=item;
    return (
        <div className="card card-compact hover:transform hover:scale-105 transition-transform duration-300  hover:shadow-xl shadow-lg  bg-base-100  mt-9 ">
            <figure  ><img  className="w-full h-[200px] object-cover" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name:{name}</h2>
                <p className="font-semibold ">Tag:<span className="btn btn-xs ml-2 bg-[#2b3440] text-white" >{tags}</span></p>
                <div className="card-actions justify-end">
                    <button className="btn flex flex-col "><FaArrowAltCircleUp className="" />120</button>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;