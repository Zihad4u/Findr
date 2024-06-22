import { useContext, useEffect, useState } from "react";
import { AutoContext } from "../../Authprovider/AuthContext";
import MyProductCard from "./MyProductCard";
import { toast } from "react-toastify";


const MyProduct = () => {
    const { user } = useContext(AutoContext);
    const [Data, setData] = useState([])
    useEffect(() => {
        if (user && user.email) {
            fetch(`https://assignment-12-server-side-cyan.vercel.app/myProduct/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setData(data)
                })
        }
    }, [user])
    const handleDelete = id => {
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
                <p className=" text-[12px] font-semibold sm:text-[25px]" >My Bookings</p>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Number of votes</th>
                            <th>Status</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody  >
                        {Data.map(book => (
                            <MyProductCard

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

export default MyProduct;