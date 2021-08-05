import React, { useState, useEffect } from "react";

function CreateRoomScreen() {
  const [roomId, setRoomId] = useState("");

  const roomAutoId = () => { //generating a random unique id for roomId
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < 20; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setRoomId(result);
  };

  useEffect(() => { //setting the value of unique id when view is rendered 
    roomAutoId();
    console.log(roomId);
  });

  return (
      <div>
          Create Room
      </div>
  );
}

export default CreateRoomScreen;
