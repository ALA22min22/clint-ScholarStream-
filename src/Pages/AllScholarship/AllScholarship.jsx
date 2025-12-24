import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import Loading from '../../component/Loading';
// import Loading from '../../component/Loading';

const AllScholarship = () => {
    const publicAxios = axios.create({
        baseURL: "http://localhost:5000"
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
            <section className='flex justify-between items-center mt-10 max-w-6xl mx-auto'>

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

            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {
                    allScho.map(schol => <div key={schol._id} class="card  bg-base-400 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300 card-bordered border-base-200">
                        <figure class="h-48 relative overflow-hidden">
                            <img className='w-full' src={schol.universityImage} />
                        </figure>

                        <div class="card-body">
                            <div class="flex justify-between items-start gap-2">
                                <h2 class="card-title text-xl font-bold text-base-content">
                                    {schol.universityName}
                                </h2>
                                <div class="badge badge-secondary badge-outline font-semibold shrink-0 mt-1">{schol.scholarshipCategory}</div>
                            </div>

                            <div class="mt-4 space-y-3">

                                <div class="flex items-center text-base-content/70">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 text-primary">
                                        <path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.327-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.493 1.698 5.988 3.303 7.619.882.799 1.707 1.381 2.327 1.765.311.193.571.337.757.433.092.047.171.086.235.115l.046.02zM10 6a3 3 0 110 6 3 3 0 010-6z" clip-rule="evenodd" />
                                    </svg>
                                    <span>{schol.country}, {schol.city}</span>
                                </div>

                                <div class="flex items-center text-base-content/70">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 text-success">
                                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v.5h-3a.75.75 0 000 1.5h3v.5a.75.75 0 00-1.5 0v.5h-3a.75.75 0 000 1.5h3v.5a.75.75 0 00-1.5 0v.5h-3a.75.75 0 000 1.5h3v2.5a.75.75 0 001.5 0v-.5h3a.75.75 0 000-1.5h-3v-.5a.75.75 0 001.5 0v-.5h3a.75.75 0 000-1.5h-3v-.5z" />
                                    </svg>
                                    <span>Application Fees: <span class="font-bold text-error">{schol.applicationFees}</span></span>
                                </div>

                            </div>

                            <div class="card-actions justify-end mt-6">
                                <Link to={`/scholarships/${schol._id}`} class="btn btn-primary w-full group">
                                    View Details
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 transition-transform group-hover:translate-x-1">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
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