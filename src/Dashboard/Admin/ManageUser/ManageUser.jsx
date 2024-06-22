import React, { useEffect, useState } from 'react';
import ManageUserCard from './ManageUserCard';

const ManageUser = () => {
    const [userData, setUserData] = useState([])
    useEffect(() => {
        fetch(`https://assignment-12-server-side-cyan.vercel.app/getUser`)
            .then(res => res.json())
            .then(data => setUserData(data));
    }, [])
    console.log(userData)
    return (
        <div>
            <div className="flex justify-center mt-6" >
                <p className=" text-[12px] font-semibold sm:text-[25px]" >Manage Users</p>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody  >
                        {userData.map(book => (
                            <ManageUserCard

                                // handleDelete={handleDelete}
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

export default ManageUser;