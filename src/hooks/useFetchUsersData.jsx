import { useQuery } from "react-query";
import axios from "axios";

const url = "https://streamify-json.onrender.com";

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
