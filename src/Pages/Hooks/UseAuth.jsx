import React, { use } from 'react';
import { AuthContext } from '../../Provider/AuthContex';

const UseAuth = () => {
    const authData = use(AuthContext);
    return authData;
};

export default UseAuth;