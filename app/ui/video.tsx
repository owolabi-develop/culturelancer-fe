"use client"
import React, { useRef,useState } from 'react';
import { FaPlay } from "react-icons/fa";


const VideoThumbnail = ({source_url}:{source_url:string}) => {
    const videoRef = useRef(null);
    const playbtn = useRef(null);
    const [playing,setPlaying] = useState(false)

    const handlePlay = () => {
        if (videoRef.current) {
            setPlaying(true)
        }
    };

   
    return (
        <div className="relative w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg cursor-pointer">
            <video ref={videoRef} className="w-full" >
      <source src={source_url} type="video/mp4"/> 
      Your browser does not support the video tag.
      </video>
            
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                {playing?"":<button ref={playbtn} onClick={handlePlay} >
                <FaPlay className='h-14 w-10 cursor-pointer'/>
             </button>}
               
            </div>
        </div>
    );
};

export default VideoThumbnail;










