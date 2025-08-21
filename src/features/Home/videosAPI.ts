import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IVideo } from "./types";
import jsonData from "@/data/movies.json";

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

        const featured: IVideo = {
          id: featuredData.Id,
          title: featuredData.Title,
          coverImage: featuredData.CoverImage,
          titleImage: featuredData.TitleImage,
          date: featuredData.Date,
          releaseYear: featuredData.ReleaseYear,
          mpaRating: featuredData.MpaRating,
          category: featuredData.Category,
          duration: +featuredData.Duration,
          videoUrl: featuredData.VideoUrl,
          description: featuredData.Description,
        };

        const trending: IVideo[] = jsonData.TendingNow.map((v) => ({
          id: v.Id,
          title: v.Title,
          coverImage: v.CoverImage,
          titleImage: v.TitleImage,
          date: v.Date,
          releaseYear: v.ReleaseYear,
          mpaRating: v.MpaRating,
          category: v.Category,
          duration: +v.Duration,
          videoUrl: v.VideoUrl,
          description: v.Description,
        }));

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
