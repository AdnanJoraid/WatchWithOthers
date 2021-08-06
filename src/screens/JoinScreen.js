import React, {useState} from "react";
import { Button, Input, Grid, Typography} from "@material-ui/core";
import { useHistory } from 'react-router-dom'
import { db } from "../database/firebase";

function JoinScreen() {
    const [roomId, setRoomId] = useState('')
    const history = useHistory();

    const joinRoomHandler = async () => {
        const dbDoc = await db.collection('rooms').doc(roomId);
        const doc = await dbDoc.get()
        if (!doc.exists){
            alert('The room with the id given does not exist')
        }else{
            localStorage.setItem(`isHost-${roomId}`, false)
            history.push(`/room/${roomId}`)
        }
        
    }

  return (
    <Grid container spacing={2} className="center">
      <Grid item xs={12} align="center">
        <Typography variant="h3" compact="h3">
          Join a Room, and WatchWithOthers!
        </Typography>
      </Grid>

      <Grid item xs={12} align="center">
        <Input placeholder='Enter Room ID' variant="h3" compact="h3" required onChange={(e) => setRoomId(e.target.value)}>
          Join a Room, and WatchWithOthers!
        </Input>
      </Grid>
      <Grid item xs={12} align="center">
        <Button style={{ textDecoration: "none" }} disableElevation variant='contained' color='secondary' onClick={joinRoomHandler}>
          Join
        </Button>
      </Grid>

    </Grid>
  );
}

export default JoinScreen;
