import React, { useContext } from "react";
import LeftMenu from "./LeftMenu/LeftMenu";
import "./Feed.css";
import Video from "./Videos/Video";
import { YoutubeContext } from "../../Context_Api/ContextApi";
import load from "../../Assets/load.gif";

const Feed = (props) => {
  const { myCtx } = useContext(YoutubeContext);

  if (myCtx.result.length === 0) {
    return (
      <div className="container-fluid vh-100 bg-dark">
        <div className="loader">
          <div className="col-md-6">
            <img src={load} className="w-100 h-100" alt="" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container-fluid feed">
      <div className=" feed-flex">
        <div className={props.classes}>
          <LeftMenu />
        </div>
        <div className="col-md-10">
          <div className="container feed-color py-5">
            <div className="row">
              {myCtx.result.length !== 0 &&
                myCtx.result.contents.map((vid) => {
                  return (
                    <div className="col-md-3 mb-2" key={vid?.video?.videoId}>
                      <Video video={vid?.video} />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
