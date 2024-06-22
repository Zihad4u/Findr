import React from 'react';

const CuponCard = ({ item, handleDelete }) => {
    const { CuponCode, ExpirtyDate, DiscountAmount, description, _id } = item
    return (
        <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Cupon Code:{CuponCode}</h2>
                <p className='text-[18px] font-medium' >{description}</p>
                <p className='font-semibold' >Expiry Data:{ExpirtyDate}</p>
                <p className='font-semibold' >Discount Amount:{DiscountAmount}</p>
            </div>
            <div className='mb-2 ml-5 ' >
                <button onClick={() => document.getElementById('my_modal_3').showModal()} className='btn' >Delete</button>

            </div>
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
        </div>
    );
};

export default CuponCard;