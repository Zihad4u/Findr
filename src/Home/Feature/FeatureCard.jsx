// import React from 'react';

import { useContext, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { AutoContext } from "../../Authprovider/AuthContext";

const FeatureCard = ({ item }) => {
    const { name, tags, image,_id, upvoteCount } = item;
    const [voteCount,setVoteCount]=useState(upvoteCount)
    const {user}=useContext(AutoContext);
    const navigate=useNavigate();

    const handleUpvote=()=>{
        if(!user){
            return navigate('/login')
        }
        setVoteCount(voteCount +1)
        console.log(voteCount)
    }
    return (
        <div  className="card card-compact hover:transform hover:scale-105 transition-transform duration-100  hover:shadow-xl shadow-lg  bg-base-100  mt-9 ">
            <figure  ><img className="w-full h-[200px] object-cover" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <NavLink to={`/details/${_id}`} className="card-title hover:text-yellow-500">{name}</NavLink>

                <div className="card-actions justify-between">
                    <p className="font-semibold ">Tag:<span className="btn btn-xs ml-2 bg-[#2b3440] text-white" >{tags}</span></p>
                    <button disabled={voteCount>upvoteCount} onClick={handleUpvote} className="btn  flex flex-col " ><FaArrowAltCircleUp className="" />{voteCount}</button>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;