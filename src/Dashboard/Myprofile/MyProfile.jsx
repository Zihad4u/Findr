// import React from 'react';

import { useContext } from "react";
import { AutoContext } from "../../Authprovider/AuthContext";

const MyProfile = () => {
    const { user } = useContext(AutoContext)
    return (
        <div className="flex justify-center" >
            <div className="mt-20 p-8 bg-[#2b3440] w-screen md:w-auto flex flex-col items-center h-[300px] rounded-lg" >
                <div className="mt-8" >
                    <img className="btn-circle" src={user.photoURL} alt="" />
                </div>
                <div className="mt-4 text-center text-white text-[12px] md:text-[32px] font-semibold" >
                    <p className="" >Name:{user.displayName}</p>
                    <p>Email:{user.email}</p>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;