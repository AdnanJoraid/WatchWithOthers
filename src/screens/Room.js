import React, { useState, useEffect } from "react";
import '../App.css'
import { db } from "../database/firebase";
import { Typography } from "@material-ui/core";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import Videoplayer from "./VideoPlayer";
import Search from "./Search";


function Room(props) {
  const [videoMetaInfo, setVideoMetaInfo] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [urlIsDifferent, setUrlIsDifferent] = useState(false)
  const [currentUrl, setCurrentUrl] = useState('');
  const id = props.match.params.id;
  const isRoomHost = localStorage.getItem(`isHost-${id}`);
  
  
  useEffect(() => {
    videoUrlDoesExist()
    db.collection('rooms').doc(id).onSnapshot((doc) => {
      setCurrentUrl(doc.data().currentVideoUrl)
      
    })
        
  }, [selectedVideo, urlIsDifferent])

 

  const confirmVideo = async() => {
    console.log(selectedVideo);
    await db.collection('rooms').doc(id).set({
      id: id, 
      currentVideoUrl: `${selectedVideo}`, 
    })
   
    videoUrlDoesExist()
  }

  const videoUrlDoesExist = async () => {
    const dbDoc = await db.collection('rooms').doc(id);
    const doc = await dbDoc.get()
    if (doc.data().currentVideoUrl){
      if(doc.data().currentVideoUrl !== currentUrl){
        setCurrentUrl(doc.data().currentVideoUrl)
        setUrlIsDifferent(true)
      }else{
        setUrlIsDifferent(false)
      }
    }
  }
  

  const onSearch = async (keyword) => {
    await youtube
      .get("/search", {
        params: {
          q: keyword,
        },
      })
      .then((response) => {
        setVideoMetaInfo(response.data.items);
        setSelectedVideo(response.data.items[0].id.videoId);
      })
   


  };
  const onVideoSelected = (videoId) => {
    setSelectedVideo(videoId);
    confirmVideo()
  };

  if (isRoomHost === "true") {
    return (
      <div className='App'>
        
        <Search onSearch={onSearch}/>
   
          <VideoList onVideoSelected={onVideoSelected} data={videoMetaInfo} />
          <Typography variant='h6'>
            Click twice on the video you want to select!
          </Typography>
        
          
    
        <div className='center' style={{
        marginLeft: '-285px'
      }}>
      
        <Videoplayer videoId={selectedVideo}/>
        </div>
       
      </div>
    );
  } else {
      return (<div style={{
        margin: 'auto',
        width: '70%', 
        padding: '40px'
      }}>

      <Videoplayer videoId={currentUrl}/>
      </div>);
  }
}

export default Room;
