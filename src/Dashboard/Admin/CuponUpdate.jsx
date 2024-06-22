import { useRef } from "react";
import Swal from "sweetalert2";


const CuponUpdate = () => {
    const textAreaRef = useRef(null);
    const textAreaRef1 = useRef(null);
    const textAreaRef2 = useRef(null);
    const textAreaRef3 = useRef(null);

    const hadnleCupon = (e) => {
        e.preventDefault();
        const target = e.target;
        const name = target.itemName.value;
        const ExpirtyDate = target.expiryDate.value
        const DiscountAmount = parseInt(target.DiscountAmount.value);
        const description = target.description.value;
        const data = { CuponCode: name, ExpirtyDate, DiscountAmount, description }
        fetch('https://assignment-12-server-side-cyan.vercel.app/cupon', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged == true) {
                    Swal.fire({
                        title: 'succesfull',
                        text: 'Item addeded successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    });
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!"
                    });
                }
            })
        textAreaRef.current.value = "";
        textAreaRef1.current.value = "";
        textAreaRef2.current.value = "";
        textAreaRef3.current.value = "";
    }
    return (
        <div className='p-8 max-w-[600px] mx-auto' >
            <div className="flex justify-center text-[20px] font-semibold" >
                <p>Add Cupon</p>
            </div>

            <form onSubmit={hadnleCupon} className="space-y-4 mt-4">

                <div className="sm:flex space-y-2 sm:space-y-0 sm:space-x-4">
                    <input required
                        type="text"
                        placeholder="Cupon Code"
                        className="w-full p-2 border rounded-md"
                        name='itemName'
                        ref={textAreaRef1}

                    />
                </div>
                <div className="sm:flex space-y-2 sm:space-y-0 sm:space-x-4">

                    <input required
                        type="date"
                        placeholder="Expiry Date"
                        className="w-full p-2 border rounded-md"
                        name='expiryDate'
                        ref={textAreaRef}

                    />
                    <input required
                        type="number"
                        placeholder="Discount Amount"
                        className="w-full p-2 border rounded-md"
                        name='DiscountAmount'
                        ref={textAreaRef2}

                    />

                </div>
                <textarea required
                    placeholder='Description'
                    rows='5'
                    name='description'
                    className='w-full p-2 border rounded-md'
                    ref={textAreaRef3}
                ></textarea>

                <button type='submit' className='px-4 py-2 bg-green-500 text-white rounded-md'>
                    Submit
                </button>
            </form>

        </div>
    );
};

export default CuponUpdate;