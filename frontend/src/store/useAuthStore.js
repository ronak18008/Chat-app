import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
    authUser:null,
    isSignIngUp: false,
    isLoggingIng: false,

    isCheckingAuth: true,

    checkAuth: async () => {
        try {
            const response = await axiosInstance.get("/auth/me");
            set({ authUser: response.data, isCheckingAuth: false });
        } catch (error) {
            set({ authUser: null, isCheckingAuth: false });
        }
    },

    signup: async (data) => {
        set({ isSignIngUp: true });
        try {
            const res = await axiosInstance.post("/auth/signup", data);
            set({ authUser: res.data });
            toast.success("Signed up successfully!");
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isSignIngUp: false });
        }

    },
        login: async (data) => {
        set({ isLoggingIng: true });
        try {
            const res = await axiosInstance.post("/auth/login", data);
            set({ authUser: res.data });
            toast.success("Logged in successfully!");
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({isLoginingIng: false });
        }
        },

  logout: async () => {
    try {
        await axiosInstance.post("/auth/logout");
        set({ authUser: null });
        toast.success("Logged out successfully");
    } catch (error) {
        toast.error(error.response.data.message);
    }
  },

  updateProfile: async(data) => {},
}))