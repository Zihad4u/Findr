import React, { useContext } from 'react';
import { AutoContext } from '../Authprovider/AuthContext';

const RootHome = () => {
    const { user } = useContext(AutoContext)
    return (
        <div>
            <div>
                <p className=' text-[18px] sm:text-[32px]' >Hello Welcome {user.displayName} </p>
            </div>
            <div className=' w-full h-[800px]  mt-10' >
                <div className="card lg:card-side  bg-base-100 shadow-xl">
                    <div className=' w-full lg:w-[50%] bg-[#212121] rounded-l-md flex flex-col justify-center items-center' >
                        <div className='' >
                            <img className='btn-circle' src={user.photoURL} alt="" />
                        </div>
                        <div className='flex justify-center mt-2' >
                            <p className='text-white text-[18px]' >{user.displayName}</p>
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Your total upload product: </h2>
                        <p></p>
                        <div className="card-actions justify-end">
                            <button className=""></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RootHome;