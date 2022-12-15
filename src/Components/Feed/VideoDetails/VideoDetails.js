import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams, Link } from "react-router-dom";
import { fetchApi } from "../../../Fetch_Api/api";
import NumberAbbreviate from "number-abbreviate";
import { AiOutlineCaretDown } from "react-icons/ai";
import { IoMdArrowDropup } from "react-icons/io";

import axios from "axios";
// import { FaCommentAlt } from "react-icons/fa";
import "./VideoDetails.css";
import VideoLength from "../Videos/VideoLength";
import spinner from "../../../Assets/spinner.gif";
import load from "../../../Assets/loader.gif";

const VideoDetails = () => {
  const [video, setVideo] = useState("");
  const [related, setRelated] = useState("");
  //   const [load, setLoad] = useState(false);
  const [desc, setDesc] = useState(false);
  //   const [played, setPlayed] = useState(0);
  const { Id } = useParams();
  console.log(Id);
  //   let minutes = Math.floor(played / 60);
  //   console.log(played);
  const fetchVideo = () => {
    setRelated(true);
    fetchApi(`/video/details/?id=${Id}`).then((res) => {
      //   console.log(res.data.author.avatar[0].url);
      setVideo(res.data);
      //   setLoad(false);
    });
  };

  // fetchApi(`/video/related-contents/id=${Id}`).then((res) => {
  //   console.log(res.data);
  //   setRelated(res.data);
  //   setLoad(false);
  // });
  //   };

  useEffect(() => {
    const fetchRelatedVideo = async () => {
      //   setLoad(true);
      const options = {
        method: "GET",
        url: "https://youtube138.p.rapidapi.com/video/related-contents/",
        params: { id: `${Id}`, hl: "en", gl: "US" },
        headers: {
          "X-RapidAPI-Key":
            "b21e2a7498msh48824e6ee10d538p17d33ajsn2ae7fa606aa8",
          "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
        },
      };

      await axios.request(options).then((response) => {
        // console.log(response.data);
        setRelated(response.data);
        // setRelated();
      });
    };
    fetchVideo();
    fetchRelatedVideo();
  }, [Id]);
  //   console.log(related.contents);
  return (
    <div className="videoDetails">
      <div className="pt-3 container ">
        <div className="row py-3">
          <div className="col-md-8 mb-4 text-light">
            {video.length === 0 && (
              <img
                src={load}
                className="w-100"
                style={{ objectFit: "contain" }}
                alt="..."
              />
            )}
            <div className="player">
              {video.length !== 0 && (
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${Id}`}
                  width="100%"
                />
              )}
            </div>

            <div className="py-1">
              <span className="fw-semibold">{video?.title}</span>
              <div className="my-1 fw-semibold text-secondary">
                {" "}
                {video?.stats?.views &&
                  NumberAbbreviate(video?.stats?.views, 2)}
                {video?.stats?.views && <span className="mx-1">views .</span>}
                <span className="mx-2 text-secondary">published on</span>
                <span className="text-secondary">{video?.publishedDate}</span>
              </div>
            </div>
            <div className="py-1">
              <div className="d-flex ">
                {/* <AiTwotoneLike className="h2  mx-2" /> */}
                {video?.stats?.likes &&
                  NumberAbbreviate(video?.stats?.likes, 2)}
                {video?.stats?.likes && <span className="mx-1">Likes</span>}
              </div>
            </div>
            <div className="image py-2">
              <img
                src={video?.author?.avatar[0]?.url}
                alt="..."
                className="me-2"
              />
              {video?.author?.title}
            </div>
            <div className="d-flex justify-content-between">
              <span className="text-secondary fw-semibold">
                {video?.author?.stats?.subscribersText}
              </span>
              <div className="btn btn-secondary" onClick={() => setDesc(!desc)}>
                {" "}
                {!desc && <AiOutlineCaretDown />}
                {desc && <IoMdArrowDropup />}
              </div>
            </div>

            {desc && <span className="fw-semibold">{video.description}</span>}
          </div>
          <div className="col-md-4 forscroll">
            {!related.contents && (
              <img
                src={spinner}
                className="w-100 h-100"
                style={{ objectFit: "contain" }}
                alt="..."
              />
            )}
            {/* {related && related} */}
            {related.contents &&
              related.contents.map((vid) => {
                return (
                  <Link
                    to={`/video/${vid?.video?.videoId}`}
                    className="text-decoration-none"
                    key={vid?.video?.videoId}
                  >
                    <div className="mycard mb-3 w-100 text-light">
                      <div className="mytime">
                        <img
                          src={vid?.video?.thumbnails?.[0].url}
                          alt=""
                          className="me-2 w-100 mydetailimg"
                        />
                        <span className="time">
                          {vid?.video?.lengthSeconds && (
                            <VideoLength time={vid?.video?.lengthSeconds} />
                          )}
                        </span>
                      </div>
                      <div className="details">
                        <div>{vid?.video?.title}</div>
                        <div className="text-secondary mt-3">
                          {NumberAbbreviate(vid?.video?.stats?.views, 2)}
                          <span> views</span>
                          <span className="text-success ms-3">
                            {vid?.video?.publishedTimeText}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
