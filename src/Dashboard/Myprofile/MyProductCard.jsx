import React from 'react';
import { NavLink } from 'react-router-dom';

const MyProductCard = ({ book, handleDelete }) => {
    const { name, status, upvoteCount, _id } = book;
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
                <td className="p-4 whitespace-nowrap">
                    {upvoteCount}
                    <br />
                </td>
                <td className="p-4 whitespace-nowrap btn ">{status}</td>
                <td className="p-4 whitespace-nowrap "><button onClick={() => document.getElementById('my_modal_3').showModal()} className='btn' >Delete</button></td>
                <NavLink to={`/dashRoot/update/${_id}`} className="p-4 whitespace-nowrap mt-4 btn">
                    Update
                </NavLink>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4 text-[22px] font-semibold">Are you sure you want to delete</p>
                        <form method="dialog">
                            <button onClick={() => handleDelete(_id)} className='btn' >Yes</button>
                            <button className='btn ml-3' >No</button>

                        </form>
                    </div>
                </dialog>
            </tr></>

    );
};

export default MyProductCard;