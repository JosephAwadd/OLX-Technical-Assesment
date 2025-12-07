import { useQuery } from "@tanstack/react-query";
import { getCategories, getCategoryFields } from "../network/categories";

export const useCategories = () => {
    return useQuery({
        queryKey: ["categories"],
        queryFn: getCategories,
    });
};

export const useCategoryFields = (params) => {
    return useQuery({
        queryKey: ["categoryFields", params],
        queryFn: () => getCategoryFields(params),
        enabled: !!params?.categorySlugs,
    });
};