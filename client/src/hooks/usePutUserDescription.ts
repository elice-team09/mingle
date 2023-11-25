import { AxiosInstance } from 'axios';
import { useMutation } from 'react-query';
import { UserInfo } from '../types';
import { useAxios } from '../utils';




const putUserDescription = async (axiosInstance: AxiosInstance, updatedInfo:Partial<UserInfo>): Promise<UserInfo> =>{
        const response = await axiosInstance.put('api/account/description', updatedInfo)
        return response.data;
    
}

export function usePutUserDescription(){
    const axiosInstance = useAxios();
    return useMutation(
        (updatedInfo: Partial<UserInfo>) => putUserDescription(axiosInstance, updatedInfo),
        {
            onSuccess: (data) =>{
                console.log('User description updated : ', data)
            }
        }
    )
}

