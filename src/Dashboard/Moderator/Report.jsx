import React, { useEffect, useState } from 'react';
import ReportCard from './ReportCard';
import { toast } from 'react-toastify';


const Report = () => {
    const [reportData,setReportData]=useState([])
    useEffect(()=>{
        fetch('https://assignment-12-server-side-cyan.vercel.app/reportData')
        .then(res=>res.json())
        .then(data=>{
            // console.log (data)
            setReportData(data)
        })
    },[])
    const handleDelete=(id,_id)=>{
        console.log(id,_id)
        fetch(`https://assignment-12-server-side-cyan.vercel.app/deleteReport/${id}?_id=${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast.success('Product Delete')
                }
                setReportData(prevBookings => prevBookings.filter(data => data._id !== _id));
            })
            .catch(errro => {
                toast.error(errro.message)
            })
    }
    return (
        <div>
            <div className="flex justify-center mt-6 mb-3" >
                <p className=" text-[12px] font-semibold sm:text-[25px]" >Reported Product</p>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Details</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody  >
                        {reportData.map(book => (
                            <ReportCard

                                handleDelete={handleDelete}
                                key={book._id}
                                book={book}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Report;