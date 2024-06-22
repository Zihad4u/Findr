import React, { PureComponent, useContext, useEffect, useState } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { AutoContext } from '../../Authprovider/AuthContext';

const Statistics = () => {
    const { loading } = useContext(AutoContext)
    const [Data, setData] = useState([])

    useEffect(() => {
        fetch('https://assignment-12-server-side-cyan.vercel.app/data/counts')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.error('Error fetching counts:', err));
    }, []);


    const { allDataCount, reviewCount, userCount } = Data;
    console.log(allDataCount)
    const data01 = [
        { name: 'Products', value: allDataCount },
        { name: 'Reviews', value: reviewCount },
        { name: 'User', value: userCount },
    ];
    return (
        <>
            {
                loading ? <span className="loading loading-spinner loading-lg"></span> : <div>
                    <div className='flex justify-center text-[32px] font-semibold' >
                        <p>Statistics of total product,review and user</p>
                    </div>
                    <div className='flex justify-center' >

                        <PieChart width={400} height={400}>
                            <Pie
                                dataKey="value"
                                isAnimationActive={false}
                                data={data01}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#8884d8"
                                label
                            />
                            <Pie dataKey="value" data={data01} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                            <Tooltip />
                        </PieChart>

                    </div>
                </div>
            }
        </>
    );
};

export default Statistics;