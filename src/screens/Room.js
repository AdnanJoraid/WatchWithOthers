import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../database/firebase";

function Room(props) {
  const id = props.match.params.id;
  const isRoomAdmin = localStorage.getItem("isHost");
  console.log(isRoomAdmin ? true : false);


 

  return (
    <div className="App">
      room
    </div>
  );
}

export default Room;
