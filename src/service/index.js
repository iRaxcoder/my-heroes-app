import { getDataFromUrl } from "../helper/getData";

export const operations = {
  searchByKeyword: async (keyWord) => {
    return await getDataFromUrl(
      "characters" + "?limit=10&nameStartsWith=" + keyWord + "&"
    );
  },
};
