// import React from 'react';

import { FaArrowAltCircleUp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const FeatureCard = ({ item }) => {
    const { name, tags, image,_id, upvoteCount } = item;
    return (
        <NavLink to={`/details/${_id}`} className="card card-compact hover:transform hover:scale-105 transition-transform duration-100  hover:shadow-xl shadow-lg  bg-base-100  mt-9 ">
            <figure  ><img className="w-full h-[200px] object-cover" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>

                <div className="card-actions justify-between">
                    <p className="font-semibold ">Tag:<span className="btn btn-xs ml-2 bg-[#2b3440] text-white" >{tags}</span></p>
                    <button className="btn flex flex-col "><FaArrowAltCircleUp className="" />{upvoteCount}</button>
                </div>
            </div>
        </NavLink>
    );
};

export default FeatureCard;