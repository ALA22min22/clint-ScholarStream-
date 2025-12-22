import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAxiosSequre from '../../Hooks/UseAxiosSequre';
import { Bar, BarChart, Cell, Tooltip, XAxis, YAxis } from 'recharts';
import Loading from '../../../component/Loading';

const Analytics = () => {
    const axiooSecure = UseAxiosSequre();
    const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#00c49f", "#ff69b4"];

    const { data: analytics = [], isLoading, isError } = useQuery({
        queryKey: ["analytics"],
        queryFn: async () => {
            const users = await axiooSecure.get("/analytics/users");
            const totalScholersiph = await axiooSecure.get("/analytics/scholersiph");
            const fees = await axiooSecure.get("/analytics/application-fees");
            const university = await axiooSecure.get("/analytics/application/university");
            const scholersiph = await axiooSecure.get("/analytics/application/scholersiph");

            return {
                totalUsers: users.data,
                totalScholersiph: totalScholersiph.data,
                totalFees: fees.data.totalFees,
                university: university.data,
                scholersiph: scholersiph.data
            }
        }
    })

    if(isLoading){
        return <Loading></Loading>
    }
    if(isError){
        return <isError></isError>
    }

    // console.log("check university:", analytics?.university)

    return (
        <div className='max-w-6xl mx-auto my-10'>
            <h3 className="text-4xl font-bold">Analytics</h3>
            <p className="my-4 text-gray-500 text-2xl">Visualize Platform Data</p>
            <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5'>
                <div className=' rounded-3xl  py-5 px-0 text-center bg-white  text-4xl font-bold font-mono shadow-lg '> <span className='text-2xl  '>Total Users</span> <br /> {analytics.totalUsers}</div>
                <div className=' rounded-3xl  py-5 px-0 text-center bg-white  text-4xl font-bold font-mono shadow-lg'> <span className='text-2xl  '>Total Fees</span> <br /> ${analytics.totalFees}</div>
                <div className=' rounded-3xl  py-5 px-0 text-center bg-white  text-4xl font-bold font-mono shadow-lg'> <span className='text-2xl  '>Total Scholarship</span> <br /> {analytics.totalScholersiph}</div>
            </section>

            <section className=' bg-white shadow-lg rounded-3xl mt-10 py-4 '>
                <h2 className="mb-4 font-semibold text-2xl ml-14 ">Applications Counts per University</h2>
                <BarChart width={"100%"} height={400} data={analytics?.university}>
                     
                    <XAxis dataKey={"_id"} interval={0} angle={5} ></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Bar dataKey={"count"} >
                        {
                            analytics?.university?.map((clr, index)=> (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}></Cell>
                            ))
                        }
                    </Bar>
                </BarChart>
            </section>

        </div>
    );
};

export default Analytics;