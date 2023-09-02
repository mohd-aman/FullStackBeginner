

//Register a new user

import { axiosInstance } from "."

export const RegisterUser = async (payload)=>{
    try{
        const response = await axiosInstance.post('http://localhost:8080/api/users/register',payload);
        return response.data;
    }catch(err){
        return err;
    }
}

export const LoginUser = async (payload)=>{
    try{
        const response = await axiosInstance.post('http://localhost:8080/api/users/login',payload);
        return response.data;
    }catch(err){
        return err;
    }
}