export interface IVideo {
  id: string;
  title: string;
  coverImage: string;
  titleImage: string;
  date: string;
  releaseYear: string;
  mpaRating: string;
  category: string;
  duration: number;
  videoUrl?: string;
  description: string;
}

export interface IVideosState {
  featured: IVideo | null;
  trending: IVideo[];
  lastClickedId?: string;
}
