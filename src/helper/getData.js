const BASE_URL = "https://gateway.marvel.com/v1/public/";
const ACCESS_PARAMS = import.meta.env.VITE_API_KEY;

export const getDataFromUrl = async (query) => {
  const url = BASE_URL + query + ACCESS_PARAMS;
  console.log(ACCESS_PARAMS);

  const resp = await fetch(url);

  if (resp.status === 404) {
    return -1;
  }

  const {
    data: { results },
  } = await resp.json();

  return results;
};
