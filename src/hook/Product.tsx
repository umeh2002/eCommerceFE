import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../Api/ProductApi";

export const useProduct = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProduct,
  });

  return { data, isLoading };
};