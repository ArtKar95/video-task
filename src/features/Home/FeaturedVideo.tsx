import { useEffect, useState } from "react";
import { Button } from "antd";
import { PlayCircleFilled } from "@ant-design/icons";
import type { IVideo } from "./types";

interface IProps {
  featured: IVideo;
}

export const FeaturedVideo = ({ featured }: IProps) => {
  const [showVideo, setShowVideo] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    let timer: number | null;

    if (firstLoad) {
      setShowVideo(false);
      setFirstLoad(false);
    } else {
      setShowVideo(false);
      timer = setTimeout(() => {
        setShowVideo(true);
      }, 2000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [featured]);

  if (!featured) return null;

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {!showVideo && (
        <img
          src={`/assets/${featured.coverImage}`}
          alt={featured.title}
          className="w-full h-full object-cover transition-opacity duration-700"
        />
      )}

      {showVideo && featured.videoUrl && (
        <video
          src={featured.videoUrl}
          controls
          autoPlay
          onEnded={() => setShowVideo(false)}
          className="w-full h-full object-cover"
        />
      )}

      <div className="absolute flex gap-2 flex-col top-[15%] left-6 text-white z-10 max-w-xl">
        <p className="text-lg text-gray-400">{featured.category}</p>
        <h2 className="text-6xl font-bold">{featured.title}</h2>
        <div className="flex gap-4">
          <p>{featured.releaseYear}</p>
          <p>{featured.mpaRating}</p>
          <p>
            {Math.floor(featured.duration / 60 / 60)}h{" "}
            {Math.floor((featured.duration / 60) % 60)}m
          </p>
        </div>
        <p>{featured.description}</p>
        <div className="flex items-center space-x-2 mt-5">
          <Button
            type="default"
            shape="round"
            size="large"
            icon={<PlayCircleFilled />}
            style={{ padding: "1.5rem 3rem" }}
            onClick={() => setShowVideo(true)}
          >
            Play
          </Button>

          <Button
            type="primary"
            shape="round"
            size="large"
            style={{ padding: "1.5rem 3rem" }}
          >
            More Info
          </Button>
        </div>
      </div>
    </div>
  );
};
