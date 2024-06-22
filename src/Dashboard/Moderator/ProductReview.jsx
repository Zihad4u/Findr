import React, { useEffect, useState } from 'react';
import ProductReviewCard from './ProductReviewCard';
import { toast } from 'react-toastify';

const ProductReview = () => {
    const [Realdata, setData] = useState([])

    useEffect(() => {
        fetch('https://assignment-12-server-side-cyan.vercel.app/dsaboard/data')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])
    const handleDelete = (id) => {
        console.log(id)
        fetch(`https://assignment-12-server-side-cyan.vercel.app/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    toast.success('Product Delete')
                }
                setData(prevBookings => prevBookings.filter(Data => Data._id !== id));
            })
            .catch(errro => {
                toast.error(errro.message)
            })
    }
    return (
        <div>
            <div className="flex justify-center mt-6" >
                <p className=" text-[12px] font-semibold sm:text-[25px]" >All Product</p>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Details</th>
                            <th>Featured</th>
                            <th>Accept</th>
                            <th>Reject </th>
                            <th>Status </th>
                        </tr>
                    </thead>
                    <tbody  >
                        {Realdata.map(book => (
                            <ProductReviewCard

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

export default ProductReview;