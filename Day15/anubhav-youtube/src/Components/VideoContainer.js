import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import {YOUTUBE_VIDEO_API} from "../utils/Constants"
import VideoCard, {AdVideoCard} from "./VideoCard";

const VideoContainer = () =>{
    const [videos,setVideos]=useState([]);
    useEffect(()=>{
        getYoutubeVideos()
    },[])

    const getYoutubeVideos= async() =>{
        const data=await fetch(YOUTUBE_VIDEO_API);
        const json =await data.json();
        // console.log(json.items,"----------- ")
        setVideos(json.items)
    }
    // console.log("videocontainer called")
    return videos.length==0 ? <h1>Loading...</h1> : (
        <div className="flex flex-wrap">
            <AdVideoCard info={videos[0]}/>
          {  videos.map((video)  => (
                <Link key={video.id} to={"/watch?v="+video.id}><VideoCard  info={video} /></Link>
                // console.log(video.id)
            ))
          }
        </div>
    )
}

export default VideoContainer
