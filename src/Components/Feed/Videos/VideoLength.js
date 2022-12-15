import React from "react";
import moment from "moment";

const VideoLength = ({ time }) => {
  const videoLength = moment().startOf("day").seconds(time).format("H:mm:ss");
  return <div>{videoLength}</div>;
};

export default VideoLength;
