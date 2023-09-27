import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY;

export const animeApi = createApi({
  reducerPath: "animeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://anime-db.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", rapidApiKey);
      headers.set("X-RapidAPI-Host", "anime-db.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAnime: builder.query({
      query: (params) =>
        `/anime?page=1&size=10&search=${encodeURIComponent(
          params.searchUrl
        )}&sortBy=ranking&sortOrder=asc`,
    }),
  }),
});

export const { useLazyGetAnimeQuery } = animeApi;

// ({
//         url: "/anime",
//         method: "GET",
//         params: {
//           page: "1",
//           size: "10",
//           search: params.search,
//           sortBy: "ranking",
//           sortOrder: "asc",
//         },
//  `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
//       }),
