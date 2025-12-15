import axios from 'axios';
import React from 'react';

const interseptor = axios.create({
    baseURL: "http://localhost:5000"
})

const UseAxiosSequre = () => {

    //some work like token

    return interseptor;
    
};

export default UseAxiosSequre;