import React, { useState, useEffect } from "react";
import { Grid, Button, ButtonGroup, Typography } from "@material-ui/core";
import { Link, useHistory  } from "react-router-dom";
import { db } from "../database/firebase";
function HomeScreen() {
  const [roomId, setRoomId] = useState("");
  const history = useHistory();

  useEffect(() => {
   setRoomId(roomAutoId())
  }, [])

  const roomAutoId = () => {
    //generating a random unique id for roomId
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < 6; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * charactersLength)
      );
    }
    return result
  };

  const onCreateRoomButtonHandler = () => {
    db.collection('rooms').doc(roomId).set({
      id: roomId
    }).then(() => {
        localStorage.setItem(`isHost-${roomId}`, true)
        history.push({ pathname: `/room/${roomId}`, state: {roomId}}) 
    }).catch((e) => console.log(e))
    
  };

 
  return (
    <Grid container spacing={2} className="center">
      <Grid item xs={12} align="center">
        <Typography variant="h3" compact="h3">
          WatchWithOthers
        </Typography>
      </Grid>

      <Grid item xs={12} align="center">
        <ButtonGroup disableElevation variant="contained" color="primary">
          <Button
            style={{ textDecoration: "none" }}
            color="primary"
            onClick={onCreateRoomButtonHandler}
          >
            Create a Room
          </Button>
          <Button color="secondary" to='/join' component={Link} style={{color:'white' }}>Join a Room</Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}

export default HomeScreen;
