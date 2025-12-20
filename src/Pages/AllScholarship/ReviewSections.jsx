import React from 'react';
import UseAxiosSequre from '../Hooks/UseAxiosSequre';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../component/Loading';

const ReviewSections = ({ scholarship }) => {
    const axiosSecure = UseAxiosSequre();
    const { data: review = [], isLoading, refetch } = useQuery({
        queryKey: ["review", scholarship._id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/review/${scholarship._id}`);
            return res.data;
        }
    })

    if(isLoading){
      return  <Loading></Loading>
    }
    refetch();

    return (
        <div >
                <h3 className="text-5xl text-black font-bold text-center my-10">All Reviews</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto '>
                {
                    review.map(data => <div className="card bg-base-100 image-full   shadow-sm">
                <figure>
                    <img
                        src={data.reviewerImage}
                        alt=""  className='w-full  '/>
                </figure>
                <div className="card-body text-white">
                    <h2 className="card-title">{data.reviewerName}</h2>
                    
                    <div className="card-actions justify-end">
                        <p>{data.date}</p>
                        <button className="btn btn-primary"> Retting: {data.rating}</button>
                    </div>
                    <p className='break-words'> <span className='text-2xl font-semibold'>Comment:</span> {data.comment}</p>
                    
                </div>
            </div>)
                }
            </div>
        </div>
    );
};

export default ReviewSections;