import React, { useState, useEffect } from "react";
import { db } from "../database/firebase";
import { Button, ButtonGroup } from "@material-ui/core";
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
      currentVideoUrl: `${selectedVideo}?autoplay=1`, 
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
      <div>
        
        <Search onSearch={onSearch}/>
        <div>
          <ButtonGroup disableElevation variant="contained" color="danger">
            
            <Button
              style={{ textDecoration: "none" }}
              color="primary"
              onClick={confirmVideo}
            >
              Confirm video
            </Button>
          </ButtonGroup>
        </div>
        <div
          style={{
            position: "absolute",
            right: 0,
            width: '400px',
            marginRight: '50px',
            padding: '10px',
            border: '3px solid black',
            overflow: 'scroll',
            float: 'right'
            
          }}
        >
          <VideoList onVideoSelected={onVideoSelected} data={videoMetaInfo} />
        </div>
        <div
      >
        <Videoplayer videoId={selectedVideo}/>
        </div>
       
      </div>
    );
  } else {
      return (<div>
      <Videoplayer videoId={currentUrl}/>
      </div>);
  }
}

export default Room;
