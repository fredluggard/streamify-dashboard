import { useQuery } from "react-query";
import axios from "axios";

const url = "http://localhost:4000";

const fetchData = (endpoint) => {
  return axios.get(`${url}/${endpoint}`);
};

export const useFetchUsersData = ({
  endpoint,
  enabled,
  onSuccess,
  onError,
}) => {
  return useQuery([endpoint], () => fetchData(endpoint), {
    enabled,
    onSuccess,
    onError,
    refetchOnWindowFocus: true,
    refetchIntervalInBackground: true,
  });
};
