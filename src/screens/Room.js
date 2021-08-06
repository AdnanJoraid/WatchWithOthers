import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../database/firebase";
import {Button, ButtonGroup} from "@material-ui/core"
import youtube from "../api/youtube";

function Room(props) {

  const [videoMetaInfo, setVideoMetaInfo] = useState([])
  const [selectedVideo, setSelectedVideo] = useState('')
  const [videoUrl, setVideoUrl] = useState('')
  const id = props.match.params.id;
  const isRoomAdmin = localStorage.getItem(`isHost-${id}`);
  console.log(isRoomAdmin ? true : false);

  useEffect(() => {
    onSearch()
  }, [])


  const deleteRoomHandler = async () => {
    db.collection(id).doc(id).delete().then(() => {
      console.log('deleted')
    }).catch((e) => {
      console.log(e)
    })
  
  }

  const onSearch = async (keyword) => {
    await youtube.get('/search', {
      params: {
        q:'one piece'
      }
    }).then((response) => {
      setVideoMetaInfo(response.data.items)
      setSelectedVideo(response.data.items[0].id.videoId)
      setVideoUrl(`youtube.com/watch?v=${response.data.items[0].id.videoId}&t=1s&ab_channel=${response.data.items[0].snippet.channelTitle}`)
    }).then(() => {
      db.collection('rooms').doc(id).set({
        id: id, 
        currentVideoUrl: videoUrl,
      })
    })
    //.then add link to database

    

    console.log(videoMetaInfo)
    console.log(selectedVideo)
    console.log(videoUrl)
  }

  return (
    <div>
      <ButtonGroup disableElevation variant="contained" color="danger">
          <Button
            style={{ textDecoration: "none" }}
            color="secondary"
            onClick={onSearch}
          >
            Delete Room
          </Button>
        </ButtonGroup>
    </div>

    
  );
}

export default Room;
