import axios from "axios";

export const getCategories = async () => {
    const res = await axios.get(import.meta.env.VITE_CAT_URL);
    return res.data;
};

export const getCategoryFields = async (params) => {
    const res = await axios.get(import.meta.env.VITE_CATFIELDS_URL, { params });
    return res.data;
};