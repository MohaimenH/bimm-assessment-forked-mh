import { useGetCarsQuery } from "../__generated__/types";

export function useCars() {
  const { data, loading, error } = useGetCarsQuery();
  return { cars: data?.cars ?? [], loading, error };
}