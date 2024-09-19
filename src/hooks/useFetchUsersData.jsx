import { useQuery } from "react-query";
import axios from "axios";

const fetchData = () => {
  return axios.get("http://localhost:4000/growthData");
};

export const useFetchUsersData = ({ enabled, onError }) => {
  return useQuery("user-growth", fetchData, {
    enabled,
    onError,
    refetchOnWindowFocus: true,
    refetchIntervalInBackground: true,
  });
};
