import React from 'react';
import { NavLink } from 'react-router-dom';

const ReportCard = ({ book,handleDelete }) => {
    const { name, status, upvoteCount,id,_id } = book;
    
    return (
        <>
            <tr className="bg-white border-b">
                <td className="p-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">

                        <div>
                            <div className="font-bold">{name}</div>
                        </div>
                    </div>
                </td>
                <td className="p-4 mt-4 btn whitespace-nowrap">
                    View Details
                    <br />
                </td>
                <td className="p-4 whitespace-nowrap "><button onClick={() => document.getElementById('my_modal_3').showModal()} className='btn' >Delete</button></td>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4 text-[22px] font-semibold">Are you sure you want to delete</p>
                        <form method="dialog">
                            <button  onClick={() => handleDelete(id,_id)} className='btn' >Yes</button>
                            <button className='btn ml-3' >No</button>

                        </form>
                    </div>
                </dialog>
            </tr></>
    );
};

export default ReportCard;