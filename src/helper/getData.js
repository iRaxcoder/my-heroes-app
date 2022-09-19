const BASE_URL = "https://gateway.marvel.com/v1/public/";
const ACCESS_PARAMS =
  "ts=1&apikey=1d7dd5a031787db42d3e0688ef408b62&hash=c496afb27443f7cf3d6c97fe48448930&limit=30";

export const getDataFromUrl = async (query) => {
  const url = BASE_URL + query + ACCESS_PARAMS;

  const resp = await fetch(url);

  if (resp.status === 404) {
    return -1;
  }

  const {
    data: { results },
  } = await resp.json();

  return results;
};
