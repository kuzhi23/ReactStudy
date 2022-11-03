import React from "react";
import { useParams } from "react-router-dom";

function VideoDetail() {
  const { videoId } = useParams();
  console.log(videoId);

  return <div>videoDetail {videoId}</div>;
}
export default VideoDetail;
