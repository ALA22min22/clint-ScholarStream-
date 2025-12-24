import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import Loading from '../../component/Loading';
// import Loading from '../../component/Loading';

const AllScholarship = () => {
    const publicAxios = axios.create({
        baseURL: "https://scolership-server.vercel.app"
    });

    const [searchData, setSearchData] = useState("");
    const [sortField, setSortField] = useState("postDate");
    const [sortOrder, setSortOrder] = useState("desc");
    const [page, setPage] = useState(1);
    const limit = 10;


    const { data,  isLoading } = useQuery({
        queryKey: ["scholarships", searchData, sortField, sortOrder, page],
        queryFn: async () => {
            const res = await publicAxios.get((searchData || sortField || sortOrder || page) ? `/search-scholarships?searchData=${searchData}&sortField=${sortField}&sortOrder=${sortOrder}&page=${page}&limit=${limit}` : "/search-scholarships");
            return res.data;
        }
    })

    const allScho = data?.result || [];
    const totalPage = Math.ceil(data?.total / limit);
    const pageNumber = Array.from({ length: totalPage });


    if (isLoading) {
        return <Loading></Loading>
    }


    // console.log("all scho data", allScho);

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchData(e.target.search.value)
    }

    return (
        <div>
            <section className='flex flex-col md:flex-row lg:flex-row justify-between items-center mt-10 max-w-6xl mx-auto'>

                <form onSubmit={handleSearch}
                    class="relative w-55 bg-gray-100 rounded-2xl shadow-md p-1.5 transition-all duration-150 ease-in-out hover:scale-105 hover:shadow-lg"
                >
                    <div
                        class="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none"
                    >
                        <svg
                            class="h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    <input
                        type="text"
                        name='search'
                        class="w-full pl-8 pr-24 py-3 text-base text-gray-700 bg-transparent rounded-lg focus:outline-none"
                        placeholder="Search for components, styles, creators..."
                    />
                    <button
                        class="absolute right-1 top-1 bottom-1 px-2 bg-[#5044e4] text-white font-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5044e4]"
                    >
                        Search
                    </button>
                </form>


                <h3 className='text-5xl font-bold   text-primary'>All Scholersiph</h3>

                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1">Sort Options</div>
                    <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li>
                            <button onClick={() => { setSortField("postDate"); setSortOrder("asc"); }}>
                                Post Date (Asc)
                            </button>
                        </li>
                        <li>
                            <button onClick={() => { setSortField("postDate"); setSortOrder("desc"); }}>
                                Post Date (Desc)
                            </button>
                        </li>
                        <li>
                            <button onClick={() => { setSortField("applicationFees"); setSortOrder("asc"); }}>
                                Application Fees (Asc)
                            </button>
                        </li>
                        <li>
                            <button onClick={() => { setSortField("applicationFees"); setSortOrder("desc"); }}>
                                Application Fees (Desc)
                            </button>
                        </li>
                    </ul>
                </div>

            </section>

            <div className='border-b border-gray-500 my-10 '></div>

            

            <div>
                        <div 
                        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5 max-w-6xl mx-auto'
                        >
                            {
                                allScho.map(top => <div 
                                key={top._id} 
                                className="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:h-44 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700 before:absolute before:top-0  min-h-72 relative  flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden hero  bg-gradient-to-r from-blue-50 to-white relative overflow-hidden"
                                >
            
                                    <div className='my-1'>
                                        <p className='badge badge-secondary badge-outline '>{top.scholarshipCategory}</p>
                                        <p><small className='text-[8px]'>{top.createAT}</small></p>
                                    </div>
            
                                    <div className="w-28 h-28   rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500">
                                        <img src={top.universityImage} className='rounded-full w-full h-full' alt="" />
                                    </div>
                                    <div class="z-10  group-hover:-translate-y-10 transition-all duration-500 flex flex-col items-center justify-center">
            
                                        <h3 className="text-2xl font-semibold">{top.universityName}</h3>
            
                                        <div className="flex my-1 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 text-primary">
                                                <path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.327-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.493 1.698 5.988 3.303 7.619.882.799 1.707 1.381 2.327 1.765.311.193.571.337.757.433.092.047.171.086.235.115l.046.02zM10 6a3 3 0 110 6 3 3 0 010-6z" clip-rule="evenodd" />
                                            </svg>
                                            <span className='text-center'>{top.country}, {top.city}</span>
                                        </div>
                                        <div class="flex items-center text-base-content/70">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 text-success">
                                                <path d="M10.75 4.75a.75.75 0 00-1.5 0v.5h-3a.75.75 0 000 1.5h3v.5a.75.75 0 00-1.5 0v.5h-3a.75.75 0 000 1.5h3v.5a.75.75 0 00-1.5 0v.5h-3a.75.75 0 000 1.5h3v2.5a.75.75 0 001.5 0v-.5h3a.75.75 0 000-1.5h-3v-.5a.75.75 0 001.5 0v-.5h3a.75.75 0 000-1.5h-3v-.5z" />
                                            </svg>
                                            <span>Application Fees: <span class="font-bold text-error">{top.applicationFees}</span></span>
                                        </div>
            
                                    </div>
                                    <div class="card-actions justify-end my-2">
                                        <Link to={`/scholarships/${top._id}`} class="btn btn-primary w-full group">
                                            View Details
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 transition-transform group-hover:translate-x-1">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>

            <section className='flex justify-center items-center mt-10'>
                <div>
                    {
                        pageNumber.map((_, index) => (
                            <button className='btn mr-2 hover:bg-red-500 bg' onClick={() => setPage(index + 1)}>
                                {index + 1}
                            </button>
                        ))
                    }
                </div>
            </section>

        </div>
    );
};

export default AllScholarship;