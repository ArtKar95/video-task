import React from "react";
import {
  useGetVideosQuery,
  useSetFeaturedMutation,
} from "@/features/Home/videosAPI";
import { FeaturedVideo } from "@/features/Home/FeaturedVideo";
import type { IVideo } from "@/features/Home/types";
import { TrendingCarousel } from "@/features/Home/TrendingCarousel";

const HomePage: React.FC = () => {
  const { data, isLoading, refetch } = useGetVideosQuery();
  const [setFeatured] = useSetFeaturedMutation();
  const { featured, trending } = data || {};

  const handleSelectFeatured = async (id: string) => {
    await setFeatured(id);
    refetch();
  };

  return (
    <div className="flex flex-col gap-8">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {" "}
          <FeaturedVideo featured={featured as IVideo} />
          <TrendingCarousel
            trending={trending as IVideo[]}
            handleSelectFeatured={handleSelectFeatured}
          />
        </>
      )}
    </div>
  );
};

export default HomePage;
