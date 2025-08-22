import type { IVideo } from "./types";

export const transformVideoData = (data: {
  [key: string]: string;
}): IVideo => ({
  id: data.Id,
  title: data.Title,
  coverImage: data.CoverImage,
  titleImage: data.TitleImage,
  date: data.Date,
  releaseYear: data.ReleaseYear,
  mpaRating: data.MpaRating,
  category: data.Category,
  duration: +data.Duration,
  videoUrl: data.VideoUrl,
  description: data.Description,
});
