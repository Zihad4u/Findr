import React, { useContext, useEffect, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { FiHome, FiUsers, FiSettings, FiLink, FiAlertCircle, FiUser, FiMenu } from 'react-icons/fi';
import { Outlet } from 'react-router-dom';
import { FaShoppingBag } from "react-icons/fa";
import { AutoContext } from '../Authprovider/AuthContext';
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const { user } = useContext(AutoContext);
  const [userData, setUserData] = useState()
  useEffect(() => {
    fetch(`http://localhost:5000/getUser/${user.email}`)
      .then(res => res.json())
      .then(data => setUserData(data));
  }, [])


  return (
    <div className="flex flex-col md:flex-row  min-h-screen">
      <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out bg-gray-900 text-white w-3/10 md:w-64 p-4 z-50 md:relative md:translate-x-0`}>
        <div className="flex items-center justify-between mb-8">
          <div className="text-3xl ml-12
           md:ml-0  font-bold">
            <span>DeviasKit</span>
          </div>
        </div>
        <div className="flex-grow">
          <ul>
            <li className="mb-6">
              <a href="/dashRoot" className="flex items-center text-gray-400 hover:text-white transition-colors duration-200">
                <FiHome className="mr-3" />
                <span>Overview</span>
              </a>
            </li>
            {
              userData && !userData.role && (
                <>
                  <li className="mb-6">
                    <a href="/dashRoot/myProfile" className="flex items-center text-gray-400 hover:text-white transition-colors duration-200">
                      <CgProfile className='mr-3' />
                      <span>My profile</span>
                    </a>
                  </li>
                  <li className="mb-6">
                    <a href="/dashRoot/addProduct" className="flex items-center text-gray-400 hover:text-white transition-colors duration-200">
                      <FiLink className="mr-3" />
                      <span>Add Product</span>
                    </a>
                  </li>
                  <li className="mb-6">
                    <a href="/dashRoot/myProduct" className="flex items-center text-gray-400 hover:text-white transition-colors duration-200">
                      <FaShoppingBag className='mr-3' />
                      <span className='' >My Product</span>
                    </a>
                  </li>
                </>
              )
            }
            {
              userData && userData.role === 'Moderator' && (
                <>
                  <li className="mb-6">
                    <a href="/dashRoot/productReview" className="flex items-center text-gray-400 hover:text-white transition-colors duration-200">
                      <FaShoppingBag className='mr-3' />
                      <span className='' >Product Review</span>
                    </a>
                  </li>
                </>
              )
            }
          </ul>
        </div>
        <hr className='mt-2' />
        <div>
          <a href="/" className="flex items-center mt-3 text-gray-400 hover:text-white transition-colors duration-200">
            <FiHome className="mr-3" />
            <span>Home</span>
          </a>
        </div>

      </div>
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button className="text-white bg-gray-900 p-2 rounded" onClick={toggleSidebar}>
          <FiMenu />
        </button>
      </div>
      <div className="flex-grow p-4 ">
        {/* Your main content goes here */}
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Sidebar;
