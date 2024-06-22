// import React from 'react';

import { useContext } from "react";
import { AutoContext } from "../../Authprovider/AuthContext";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const { user } = useContext(AutoContext)
    const userData = useLoaderData();
    const { name, image, description, tags, externalLinks, _id } = userData
    console.log(userData)
    const handleAddData = (e) => {
        e.preventDefault();
        const target = e.target;
        const image = target.imageUrl.value;
        const name = target.itemName.value;
        const tags = target.tag.value
        const email = target.email.value;
        const description = target.description.value;
        const status = 'Pending';
        const upvoteCount = 0;
        const externalLinks = target.externalLinks.value;

        const Data = { image, name, tags, description, externalLinks };
        fetch(`https://assignment-12-server-side-cyan.vercel.app/updateProduct/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Data)

        })
            .then(res => res.json())
            .then(data=>{
                if (data.modifiedCount >0) {
                    Swal.fire({
                        title: 'succesfull',
                        text: 'Item Updated successfully',
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
    }
    return (
        <div className='p-8 max-w-[600px] mx-auto' >
            <div className='flex justify-center pb-5 text-[32px] font-semibold' ><p>Update Product</p></div>
            <form onSubmit={handleAddData} className="space-y-4">

                <div className="sm:flex space-y-2 sm:space-y-0 sm:space-x-4">
                    <input required
                        type="text"
                        placeholder="image URL"
                        className="w-full p-2 border rounded-md"
                        name='imageUrl'
                        defaultValue={image}

                    />
                    <input required
                        type="text"
                        placeholder="Prouct name"
                        className="w-full p-2 border rounded-md"
                        name='itemName'
                        defaultValue={name}

                    />
                </div>
                <div className="sm:flex space-y-2 sm:space-y-0 sm:space-x-4">
                    {/* drop down */}
                    <input required
                        type="text"
                        placeholder="Add tags"
                        className="w-full p-2 border rounded-md"
                        name='tag'
                        defaultValue={tags}

                    />
                    <input required
                        type="text"
                        placeholder="External Links"
                        className="w-full p-2 border rounded-md"
                        name='externalLinks'
                        defaultValue={externalLinks}

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
                    defaultValue={description}
                ></textarea>

                <button type='submit' className='px-4 py-2 bg-green-500 text-white rounded-md'>
                    Submit
                </button>
            </form>

        </div>
    );
};

export default Update;