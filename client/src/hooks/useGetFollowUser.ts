import { useAxios } from "../utils";
import { AxiosInstance } from "axios";
import { useQuery } from "react-query";


const getFollowUser = async (axiosInstance: AxiosInstance) =>{
    const response = await axiosInstance.get('/account/follow')
    return response.data;
}


export function useGetFollowUser(){
    const axiosInstance = useAxios();
    return useQuery('get-follow-user', () => getFollowUser(axiosInstance))
}