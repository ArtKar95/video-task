import React from "react";
import {
  useGetVideosQuery,
  useSetFeaturedMutation,
} from "@/features/Home/videosAPI";
import { FeaturedVideo } from "@/features/Home/FeaturedVideo";
import type { IVideo } from "@/features/Home/types";
import { TrendingCarousel } from "@/features/Home/TrendingCarousel";

const HomePage: React.FC = () => {
  //!We can also create index file in the Home and do this actions there,
  //!  and just import and export it from here

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
