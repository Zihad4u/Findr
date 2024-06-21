import { useContext, useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";
import { AutoContext } from "../../Authprovider/AuthContext";


const Feature = () => {
    const [Realdata, setData] = useState([])
    const { loading } = useContext(AutoContext)
    useEffect(() => {
        fetch('http://localhost:5000/data')
            .then(res => res.json())
            .then(data => {
                const filterData = data.filter(item => item.status === 'feature');
                setData(filterData)
            })
    }, [])
    return (
        <>
            {
                loading ? <span className="loading loading-spinner loading-lg"></span> : <div className="mt-2 sm:mt-4 md:mt-6 lg:mt-11" >
                    <div className="flex justify-center" >
                        <h3 className=" text-[12px] sm:text-[20px] md:text-[30px] font-semibold" >Featured Products </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" >
                        {
                            Realdata.map(item => <FeatureCard
                                key={item._id}
                                item={item}
                            ></FeatureCard>)
                        }
                    </div>
                </div>
            }</>
    );
};

export default Feature;