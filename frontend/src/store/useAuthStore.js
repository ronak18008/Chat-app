import {create} from 'zustand'
import { axiosInstance } from '../lib/axios.js';


export const useAuthStore = create((set) => ({
    authUser:null,
    isSigningUp: false,
    isLoggingIng: false,
    isupdateProfile: false,

    isCheckingAuth:true,

    checkAuth: async () => {
        try {
            const res= await fetch('/auth/check',);

         set({authUser:res.data})   
        }catch (error) {
            console.log('Error checking auth:', error);
            set({authUser:null})

        } finally {
            set({isCheckingAuth:false});

        }
    }
}))