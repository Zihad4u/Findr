import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ManageUserCard = ({ book }) => {
    const [hide, setHide] = useState(false);
    const [hideFeature, setHideFeature] = useState(false);
    const [hideAdmin, sethideAdmin] = useState(false)
    const [hideModerator, sethideModerator] = useState(false)
    const { displayName, email, _id, role } = book;
    useEffect(() => {
        if (role === 'Admin') {
            sethideAdmin(true);
        } else {
            sethideAdmin(false);
        }
    }, [role]);
    useEffect(() => {
        if (role === 'Moderator') {
            sethideModerator(true);
        } else {
            sethideModerator(false);
        }
    }, [role]);

    const handleAdmin = _id => {
        console.log(_id)
        fetch(`https://assignment-12-server-side-cyan.vercel.app/admin/${_id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    toast.success('Make Admin Successfully');
                }
            })
            .catch(error => {
                toast.error(error.message);
            });
        sethideAdmin(true)
    }
    const handleModerator = _id => {
        fetch(`https://assignment-12-server-side-cyan.vercel.app/Moderator/${_id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    toast.success('Make Moderator Successfully');
                }
            })
            .catch(error => {
                toast.error(error.message);
            });
        
        sethideModerator(true)
    }
    return (
        <>
            <tr className="bg-white border-b">
                <td className="p-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                        <div>
                            <div className="font-bold">{displayName}</div>
                        </div>
                    </div>
                </td>
                <td className='font-semibold text-[14px]' >
                    {email}
                </td>
                <button onClick={() => handleAdmin(_id)} className='btn mt-4 mb-4' disabled={hideAdmin} >
                    Make Admin
                </button>
                <td onClick={() => handleModerator(_id)} className='font-semibold   mt-4 mb-4' >
                    <button className='bg-[#f2f2f2] btn hover:bg-[#7a7575] w-auto h-[50px] rounded-md p-4' disabled={hideModerator} >Make Moderator</button>
                </td>

            </tr>
        </>
    );
};

export default ManageUserCard;