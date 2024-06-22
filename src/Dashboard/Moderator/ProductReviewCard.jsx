import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductReviewCard = ({ book, handleDelete }) => {
    const { name, status, upvoteCount, _id } = book;
    const [hide, setHide] = useState(false); // Initialize hide as false
    const [hideFeature,sestHideFeature]=useState(false);

    useEffect(() => {
        if (status === 'Accepted' || status === 'feature' || status == 'tranding' ) {
            setHide(true);
        } else {
            setHide(false); // Ensure hide is false if status is not 'Accepted'
        }
    }, [status]);
    useEffect(() => {
        if (status === 'feature' ) {
            sestHideFeature(true);
        } else {
            sestHideFeature(false); // Ensure hide is false if status is not 'Accepted'
        }
    }, [status]);

    const handleAccept = () => {
        console.log(_id);
        fetch(`http://localhost:5000/accpetProduct/${_id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Product Accepted');
                }
            })
            .catch(error => {
                toast.error(error.message);
            });
        window.location.reload()
    };
    const handleFeature = () => {
        fetch(`http://localhost:5000/feature/${_id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Product Featured');
                }
            })
            .catch(error => {
                toast.error(error.message);
            });
        window.location.reload()
    }

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
                <td className="p-4 whitespace-nowrap ">
                    <NavLink to={`/details/${_id}`} className='btn mr-6 ' >View details</NavLink>
                    <br />
                </td>
                <td onClick={handleFeature} className="p-4 whitespace-nowrap btn mt-4" disabled={hideFeature}>Make feature</td>
                <td onClick={handleAccept} className="p-4 whitespace-nowrap">
                    <button className='btn' disabled={hide}>Accept</button>
                </td>
                <td onClick={() => document.getElementById('my_modal_3').showModal()} className="p-4 whitespace-nowrap mt-4 btn">
                    Reject
                </td>
                <td className='font-bold'>{status}</td>
                <dialog id="my_modal_3" className="modal">
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
