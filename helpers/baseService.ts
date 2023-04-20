import axios from "axios";

export const baseService = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASEURL
})