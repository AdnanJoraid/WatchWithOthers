import React from 'react'
import { useLocation } from "react-router-dom";

function Room(props) {
    const id = props.match.params.id
    console.log(id)
    return (
       <div>
           
       </div>
    )
}

export default Room
