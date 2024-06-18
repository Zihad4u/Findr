import { useState } from "react";
import { useEffect } from "react";
import FeatureCard from "../Feature/FeatureCard";
import { NavLink } from "react-router-dom";


const Tranding = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/data')
            .then(res => res.json())
            .then(data => {
                const filterData=data.filter(item=>item.status === 'tranding');
                setData(filterData)
            })
    }, [])

    return (
        <div className="mt-12" >
            <div className="flex justify-center pb-4" >
                <h1 className="text-[32px] font-semibold" >Trending Products</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" >
                {
                    data.map(item => <FeatureCard
                        key={item._id}
                        item={item}
                    ></FeatureCard>)
                }
            </div>
            <div className="mt-5 flex justify-center" >
                <NavLink className='btn bg-[#2b3440] text-white hover:text-black' to='/products' >Show All Products</NavLink>
            </div>
        </div>
    );
};

export default Tranding;


