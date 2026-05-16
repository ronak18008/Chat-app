import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";
import { Socket } from "socket.io-client";
import {useAuthStore} from "./useAuthStore";


export const useChatStore = create ((set, get) => ({
    messages: [],
    users: [],
    selectedUser: [],
    isUserLoading: false,
    isMessagesLoading: false,


    getUsers: async () => {
        set({ isUserLoading: true});
        try {
            const response = await axiosInstance.get("/users");
            set({ users: res.data });
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isUserLoading: false });
        }
    },

    getMessages: async(userId) => {
        set({ isMessagesLoading: true });
        try {
            const res = await axiosInstance.get(`/messages/${userId}`);
            set({ messages: res.data });
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isMessagesLoading: false });
        }

        // todo:optimize this one later
    },

    sendMessage: async(messageData) => {
        const { selectedUser, messages } = get();
        try {
            const res = await axiosInstance.post(`/messages/send/${selectedUser._id}`, messageData);
            set({ messages: [...messages, res.data] });
        } catch (error) {
            toast.error(error.response.data.messages);
        }
    },

subscribeToMessages: () => {
    const { selectedUser } = get()
    if(!selectedUser) return;

    const socket = useAuthStore.getState().socket;

    Socket.on("newMessage", (newMessage) => {
        set({
            messages: [...get().messages, newMessage],
        });
        });
    },

    setSelectedUser: {selectedUser} => set({ selectedUser }),
    
}));