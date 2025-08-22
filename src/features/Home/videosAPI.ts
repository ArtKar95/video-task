import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import jsonData from "@/data/movies.json";
import type { IVideo } from "./types";
import { transformVideoData } from "./helpers";

//!I can just take from json and use, but decided to simulate fetch with delay with RTK

const simulateFetch = async <T>(data: T, delay = 300): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(data), delay));

const FEATURED_KEY = "featuredId";

export const videosApi = createApi({
  reducerPath: "videosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getVideos: builder.query<{ featured: IVideo; trending: IVideo[] }, void>({
      queryFn: async () => {
        const featuredId = sessionStorage.getItem(FEATURED_KEY);
        let featuredData = jsonData.Featured;

        if (featuredId) {
          const found = jsonData.TendingNow.find((v) => v.Id === featuredId);
          if (found) {
            featuredData = found;
          }
        }

        const featured: IVideo = transformVideoData(featuredData);

        const trending: IVideo[] = jsonData.TendingNow.map((video) =>
          transformVideoData(video)
        );

        const data = await simulateFetch({ featured, trending });
        return { data };
      },
    }),

    setFeatured: builder.mutation<void, string>({
      queryFn: async (id) => {
        sessionStorage.setItem(FEATURED_KEY, id);
        return { data: undefined };
      },
    }),
  }),
});

export const { useGetVideosQuery, useSetFeaturedMutation } = videosApi;
