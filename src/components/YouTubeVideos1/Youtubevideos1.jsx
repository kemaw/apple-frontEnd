// https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&key=AIzaSyBvv35aQ2CFtx5x90g1_lJM0-h2zV9yZ8I

import React, { useEffect, useState } from "react";

function Youtubevideos1() {
  let [YouTube, setVideos] = useState([]);
  useEffect(() =>
    {fetch(
    //   "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&key=AIzaSyBvv35aQ2CFtx5x90g1_lJM0-h2zV9yZ8I"

     "https://www.googleapis.com/youtube/v3/search?key={API_KEY}=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=8"
    )
      .then((response) => response.json())
      .then((data) => 
        setVideos(data.items)
      )}
      // .catch((err) => console.log(err)),
    ,[]);

  return (
    <div className="youTubeContainer">
      <div className="yfixedContainer">
        {YouTube?.map((obj) => (
          <div className="items">
            <div>
              <a href={`https://www.youtube.com/watch?v=${obj.id.videoId}`}>
               
                <img src={obj.snippet.thumbnails.high.url} alt="" />
              </a>
            </div>
            <div className="title-wrapper">{obj.snippet.title}</div>
            <div className="desc-wrapper">{obj.snippet.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Youtubevideos1;




//// "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&key=AIzaSyBSfPZbSz8WSqYJh9v7MdZYy1PMYNc1zYU"
//"https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&key=AIzaSyBSfPZbSz8WSqYJh9v7MdZYy1PMYNc1zYU"
//)
 //a) => setYouTubeVideos(data.items)
    // let YouTubeVideosData = data.items;
    // setYouTubeVideos(YouTubeVideosData)





    {/* <div className="allVideoWrapper">
        <div className="container">
          {YouTube?.map((singleVideo)  =>
          <div className="row justify-content-center text-center">
            <div className="col-12">
              {/* <div className="title-wraper bold video-title-wrapper">
                Latest Videos <br />
                <br />
              </div> */}
              <div className="col-sm-12 col-md-6">
                <div className="singleVideoWrapper">
                  {/* <div className="videoThumbnail"> */}
                    <a href={`https://www.youtube.com/watch?v=${singleVideo.id.videoId}`}>
                      <img src={singleVideo.snippet.thumbnails.high.url} alt="" />
                    </a>
                  {/* </div> */}
                  <div className="videoTitle">
                    {/* {singleVideo.snippet.title} */}
                    <a href="{singleVideo.snippet.title}">title</a>
                  </div>
                  <div className="videoDesc"> {singleVideo.snippet.description}</div>
                )}

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}