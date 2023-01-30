import axios from "axios";

const AxiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default AxiosClient;