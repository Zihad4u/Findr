import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductReviewCard = ({ book, handleDelete }) => {
    const { name, status, upvoteCount, _id } = book;
    const [hide, setHide] = useState(false);
    const [hideFeature, setHideFeature] = useState(false);

    useEffect(() => {
        if (status === 'Accepted' || status === 'feature' || status === 'tranding') {
            setHide(true);
        } else {
            setHide(false);
        }
    }, [status]);

    useEffect(() => {
        if (status === 'feature') {
            setHideFeature(true);
        } else {
            setHideFeature(false);
        }
    }, [status]);

    const handleAccept = () => {
        fetch(`https://assignment-12-server-side-cyan.vercel.app/accpetProduct/${_id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    toast.success('Product Accepted');
                    window.location.reload(); // This will refresh the data
                }
            })
            .catch(error => {
                toast.error(error.message);
            });
    };

    const handleFeature = () => {
        fetch(`https://assignment-12-server-side-cyan.vercel.app/feature/${_id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    toast.success('Product Featured');
                    window.location.reload(); // This will refresh the data
                }
            })
            .catch(error => {
                toast.error(error.message);
            });
    };

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
                    <NavLink to={`/details/${_id}`} className='btn mr-6'>View details</NavLink>
                    <br />
                </td>
                <td className="p-4 whitespace-nowrap btn mt-4" onClick={handleFeature}>
                    <button disabled={hideFeature}>Make feature</button>
                </td>
                <td className="p-4 whitespace-nowrap" onClick={handleAccept}>
                    <button className='btn' disabled={hide}>Accept</button>
                </td>
                <td className="p-4 whitespace-nowrap mt-4 btn" onClick={() => document.getElementById(`modal_${_id}`).showModal()}>
                    Reject
                </td>
                <td className='font-bold'>{status}</td>
                <dialog id={`modal_${_id}`} className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4 text-[22px] font-semibold">Are you sure you want to reject</p>
                        <form method="dialog">
                            <button onClick={() => handleDelete(_id)} className='btn'>Yes</button>
                            <button className='btn ml-3'>No</button>
                        </form>
                    </div>
                </dialog>
            </tr>
        </>
    );
};

export default ProductReviewCard;
