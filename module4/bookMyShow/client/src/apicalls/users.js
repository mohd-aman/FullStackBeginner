

//Register a new user

import { axiosInstance } from "."

export const RegisterUser = async (payload)=>{
    try{
        const response = await axiosInstance.post('/api/users/register',payload);
        return response.data;
    }catch(err){
        return err;
    }
}

export const LoginUser = async (payload)=>{
    try{
        const response = await axiosInstance.post('/api/users/login',payload);
        return response.data;
    }catch(err){
        return err;
    }
}

//get current user
export const GetCurrentUser = async ()=>{
    try{
        const response = await axiosInstance.get("/api/users/get-current-user");
        return response.data;
    }catch(err){
        return err
    }
}