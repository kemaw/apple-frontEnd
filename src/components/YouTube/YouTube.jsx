import React, { useEffect, useState } from "react";

import "./youTube.css";
function YouTube() {
  let [YouTubeVideos, setYouTubeVideos] = useState([]);
  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&key=AIzaSyCvofrkyeqHxKuPjoxN-iWjSd2B8FkIJIE"
    )
      .then((response) => response.json())
      .then((data) => {
        setYouTubeVideos(data.items);
      });
  }, []);
  // .catch((err) => console.log(err));
  console.log(setYouTubeVideos);
  return (
    <>
      <br />
      <br />
      <br />
      <div className="allVideoWrapper">
        <div className="title-wraper bold text-center">Latest Videos</div>
        <br /> <br /> <br />
        <div className="container">
          {YouTubeVideos?.map((singleVideo, i) => (
            <div key={i} className=" singleVideoWrapper col-sm-12 col-md-6">
              <div>
                <a
                  href={`https://www.youtube.com/watch?v=${singleVideo.id.videoId}`}
                >
                  <img src={singleVideo.snippet.thumbnails.high.url} alt="" />
                </a>
              </div>
              <div className="title-wrapper">{singleVideo.snippet.title}</div>
              <div className="desc-wrapper">
                {singleVideo.snippet.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default YouTube;
