import { useEffect, useState } from "react";
import { getDataFromUrl } from "../helper/getData";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState(false);
  const [isLoading, setisLoading] = useState(true);

  const getData = async () => {
    const dataReceived = await getDataFromUrl(url);
    if (dataReceived === -1) {
      setErrors(true);
    }
    setisLoading(false);
    setData(dataReceived);
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data,
    isLoading,
    errors,
  };
};
