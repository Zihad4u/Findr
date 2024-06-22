import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import CuponCard from './CuponCard';
import { toast } from 'react-toastify';

const ManageCupon = () => {
    const [cuponData, setCuponData] = useState([])
    useEffect(() => {
        fetch('https://assignment-12-server-side-cyan.vercel.app/cupon/data')
            .then(res => res.json())
            .then(data => setCuponData(data))
    }, [])
    // console.log(cuponData)
    const handleDelete = (id) => {
        fetch(`https://assignment-12-server-side-cyan.vercel.app/deleteCupon/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    toast.success('Product Delete')
                }
                setCuponData(prevBookings => prevBookings.filter(Data => Data._id !== id));
            })
            .catch(errro => {
                toast.error(errro.message)
            })
    }
    return (
        <div>
            <div className="flex justify-center mt-6" >
                <p className=" text-[12px] font-semibold sm:text-[25px]" >Manage Cupon</p>
            </div>
            <NavLink to="/dashRoot/addCupon" className='btn mb-3' >Upload Cupon</NavLink>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" >
                {
                    cuponData.map(item => <CuponCard
                        handleDelete={handleDelete}
                        key={item._id}
                        item={item}
                    ></CuponCard>)
                }
            </div>
        </div>
    );
};

export default ManageCupon;