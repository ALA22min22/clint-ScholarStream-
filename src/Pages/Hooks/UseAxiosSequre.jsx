import axios from 'axios';
import React, { useEffect } from 'react';
import UseAuth from './UseAuth';

const axiosSecure = axios.create({
    baseURL: "https://scolership-server.vercel.app"
})

const UseAxiosSequre = () => {
    const { user, logOuth } = UseAuth();

    //some work like token

    useEffect(() => {
        const interceptorRequest = axiosSecure.interceptors.request.use((config) => {
            config.headers.Authorization = `Bearer ${user.accessToken}`
            return config
        })

        const interceptorResponse = axiosSecure.interceptors.response.use((response) => {

            return response
        },
            (error) => {
                console.log('interceptor response faild', error)
                const status = error.response?.status;
                console.log("error.response:", error.response);
                if (status === 401 || status === 403) {
                    logOuth()
                }
                return Promise.reject(error);
            })
        //remove interceptor:
        return () => {
            axiosSecure.interceptors.request.eject(interceptorRequest);
            axiosSecure.interceptors.response.eject(interceptorResponse);
        }
    }, [user, logOuth])

    return axiosSecure;

};

export default UseAxiosSequre;