import React, { useContext } from 'react';
import { AutoContext } from '../Authprovider/AuthContext';

const AddProuct = () => {
    const { user } = useContext(AutoContext)
    const handleAddData = (e) => {
        e.preventDefault();
        const target = e.target;
        const image = target.imageUrl.value;
        const Product_name = target.itemName.value;
        const tag=target.tag.value
        const email = target.email.value;
        const description = target.description.value;
        console.log(image,Product_name,email,description,tag)
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
                    />
                    <input required
                        type="text"
                        placeholder="Prouct name"
                        className="w-full p-2 border rounded-md"
                        name='itemName'
                    />
                </div>
                <div className="sm:flex space-y-2 sm:space-y-0 sm:space-x-4">
                    {/* drop down */}
                    <input required
                        type="text"
                        placeholder="Add tags"
                        className="w-full p-2 border rounded-md"
                        name='tag'
                    />

                </div>
                <div  className="sm:flex space-y-2  sm:space-y-0 sm:space-x-4">
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
                ></textarea>

                <button type='submit' className='px-4 py-2 bg-green-500 text-white rounded-md'>
                    Submit
                </button>
            </form>

        </div>
    );
};

export default AddProuct;