import { useEffect, useState } from "react";
import { getDataFromUrl } from "../helper/getData";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const getData = async () => {
    setData(await getDataFromUrl(url));
    setisLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data,
    isLoading,
  };
};
