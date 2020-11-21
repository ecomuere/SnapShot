import { useQuery } from "react-query";
import axios from "axios";
import { apiKey } from "../api/config";

export const useSearch = (keyword) => {
  return useQuery(
    keyword,
    () => {
      return axios
        .get(
          `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${keyword}&per_page=24&format=json&nojsoncallback=1`
        )
        .then((res) => res.data);
    },
    {
      cacheTime: Infinity,
      staleTime: Infinity,
    }
  );
};
