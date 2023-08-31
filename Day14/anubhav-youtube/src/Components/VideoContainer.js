import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import {YOUTUBE_VIDEO_API} from "../utils/Constants"
import VideoCard from "./VideoCard";

const VideoContainer = () =>{
    const [videos,setVideos]=useState([]);
    useEffect(()=>{
        getYoutubeVideos()
    },[])

    const getYoutubeVideos= async() =>{
        const data=await fetch(YOUTUBE_VIDEO_API);
        const json =await data.json();
        console.log(json.items,"----------- ")
        setVideos(json.items)
    }
    return videos.length==0 ? <h1>Loading...</h1> : (
        <div className="flex flex-wrap">
          {  videos.map((video)  => (
                <Link to={"/watch?v="+video.id}><VideoCard key={video.id} info={video} /></Link>
            ))
          }
        </div>
    )
}

export default VideoContainer
