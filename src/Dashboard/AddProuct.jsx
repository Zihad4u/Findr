import React, { useContext, useRef } from 'react';
import { AutoContext } from '../Authprovider/AuthContext';
import Swal from 'sweetalert2';

const AddProuct = () => {
    const textAreaRef = useRef(null);
    const textAreaRef1 = useRef(null);
    const textAreaRef2 = useRef(null);
    const textAreaRef3 = useRef(null);
    const textAreaRef4 = useRef(null);
    const { user } = useContext(AutoContext)
    const handleAddData = (e) => {
        e.preventDefault();
        const target = e.target;
        const image = target.imageUrl.value;
        const name = target.itemName.value;
        const tags = target.tag.value
        const email = target.email.value;
        const description = target.description.value;
        const externalLinks=target.externalLinks.value;
        const status = 'Pending';
        const upvoteCount = 0;
        // console.log(image,name,email,description,tags)
        const Data = { image, name, tags, email,externalLinks, description, status, upvoteCount };
        // console.log(Data)
        fetch('https://assignment-12-server-side-cyan.vercel.app/addMyProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Data)

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
        textAreaRef4.current.value = "";
    }
    return (
        <div className='p-8 max-w-[600px] mx-auto' >
            <div className='flex justify-center pb-5 text-[32px] font-semibold' ><p>Add Product</p></div>
            <form onSubmit={handleAddData} className="space-y-4">
                <div className="sm:flex space-y-2 sm:space-y-0 sm:space-x-4">
                    <input required
                        type="text"
                        placeholder="image URL"
                        className="w-full p-2 border rounded-md"
                        name='imageUrl'
                        ref={textAreaRef}
                    />
                    <input required
                        type="text"
                        placeholder="Prouct name"
                        className="w-full p-2 border rounded-md"
                        name='itemName'
                        ref={textAreaRef1}
                    />
                </div>
                <div className="sm:flex space-y-2 sm:space-y-0 sm:space-x-4">
                   
                    <input required
                        type="text"
                        placeholder="Add tags"
                        className="w-full p-2 border rounded-md"
                        name='tag'
                        ref={textAreaRef2}
                    />
                    <input required
                        type="text"
                        placeholder="External Links"
                        className="w-full p-2 border rounded-md"
                        name='externalLinks'
                        ref={textAreaRef4}
                    />

                </div>
                <div className="sm:flex space-y-2  sm:space-y-0 sm:space-x-4">
                    <input hidden
                        type="email"
                        placeholder="Emai Address"
                        className="w-full p-2 border rounded-md"
                        name='email'
                        value={user.email}
                    />
                    <input hidden
                        type="text"
                        placeholder="User Name"
                        className="w-full p-2 border rounded-md"
                        name='userName'
                        value={user.displayName}
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

export default AddProuct;