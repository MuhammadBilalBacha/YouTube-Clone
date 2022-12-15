import React from "react";
import { Link } from "react-router-dom";
import "./Video.css";
import VideoLength from "./VideoLength";
import { BsCheckCircleFill } from "react-icons/bs";
// import VideoLength from "./VideoLength";
import NumberAbbreviate from "number-abbreviate";

const Video = ({ video }) => {
  return (
    <div className="text-light mb-2 ">
      <Link to={`/video/${video?.videoId}`} className="text-decoration-none">
        <div>
          <div className="image">
            <img
              src={video?.thumbnails?.[0].url}
              className="w-100 h-100 "
              style={{ borderRadius: "5px" }}
              alt=""
            />
            <span className="bg-dark text-light px-1">
              {video?.lengthSeconds && (
                <VideoLength time={video?.lengthSeconds} />
              )}
            </span>
          </div>
          <div className="video-title py-2">
            <img src={video?.author?.avatar[0]?.url} alt="" />
            <span className="text-light fw-bold">{video?.title}</span>
            <div className="video-chanel my-3">
              <span className="text-info fw-semibold  ">
                {video?.author?.title}{" "}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <span className="text-success">
                    {" "}
                    <BsCheckCircleFill />{" "}
                  </span>
                )}
              </span>
            </div>
            <div className="video-views">
              <span className="text-secondary">
                {NumberAbbreviate(video?.stats?.views, 2)}
              </span>
              <span className="text-primary mx-2">views</span>
              <span>{video?.publishedTimeText}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Video;
