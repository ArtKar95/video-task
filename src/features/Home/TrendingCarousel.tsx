import { Carousel } from "antd";
import type { IVideo } from "./types";

interface IProps {
  trending: IVideo[];
  handleSelectFeatured: (id: string) => void;
}

export const TrendingCarousel = ({
  trending,
  handleSelectFeatured,
}: IProps) => {
  return (
    <div>
      <h3 className="text-xl mb-3 text-white">Trending Now</h3>
      <Carousel
        dots={false}
        arrows
        infinite={trending.length > 8}
        slidesToShow={Math.min(8, trending.length)}
        slidesToScroll={8}
        draggable
        responsive={[
          {
            breakpoint: 1024,
            settings: { slidesToShow: Math.min(8, trending.length) },
          },
          {
            breakpoint: 768,
            settings: { slidesToShow: Math.min(4, trending.length) },
          },
          {
            breakpoint: 480,
            settings: { slidesToShow: Math.min(2, trending.length) },
          },
        ]}
      >
        {trending.map((video) => (
          <div
            key={video.id}
            className="px-2"
            onClick={() => handleSelectFeatured(video.id)}
          >
            <div className="relative group cursor-pointer">
              <img src={`/assets/${video.coverImage}`} alt={video.title} />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
