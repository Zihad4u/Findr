// import React from 'react';

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { AutoContext } from "../Authprovider/AuthContext";
import { signOut } from "firebase/auth";
import auth from "../firebase";
import { toast } from "react-toastify";

const Navbar = () => {
    const {loading,user}=useContext(AutoContext)
    const headNav = <>
        <li className="font-semibold" ><NavLink to="/" >Home</NavLink></li>
        <li className="font-semibold" ><NavLink to="/products" > Products</NavLink></li>
        <li className="font-semibold" ><NavLink to="/contact" >Contact Us</NavLink></li>
    </>
        const handleLogout = () => {
            signOut(auth)
                .then(() => {
                    toast.success('Logout successfully')
                })
                .catch(() => {
                    toast.error('Error try again')
                })
        }
    return (
        <div className="navbar bg-base-100" >
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-base-100 rounded-box w-52">
                        {headNav}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Findr</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu gap-2 menu-horizontal px-1">
                    {headNav}
                </ul>
            </div>
            <div className="gap-2 navbar-end" >
                {/* <input onChange={handleToggle} type="checkbox" value="synthwave" className="toggle ml-4 theme-controller" /> */}
                {loading ? <span className="loading loading-infinity loading-lg"></span> : <>
                    {
                        user ? <div className=" relative" >
                            <img id="navbarClickable" className="h-12 object-cover w-12 rounded-full" src={user.photoURL} alt="" />
                            <Tooltip anchorSelect="#navbarClickable" clickable style={{ zIndex: 999 }}>
                                <button disabled className="btn disabled:bg-white disabled:text-black w-full" >{user.displayName}</button>
                                <button className="btn w-full mt-2" >Dashboard</button>
                                <div className="" >
                                    <h3 onClick={handleLogout} className="btn w-full mt-2" >Log Out</h3>
                                </div>
                            </Tooltip>
                        </div> : <div className=" sm:gap-2 gap-[2px] ">
                            <Link to='/login' ><a className="btn btn-ghost sm:px-[16px] p-2 text-[14px] sm:text-base font-bold">Login</a></Link>
                        </div>
                    }
                </>}
            </div>
        </div>
    );
};

export default Navbar;