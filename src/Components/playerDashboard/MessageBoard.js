import React from "react";
import Shot from "../Elements/DisplayMessages/Shot";
import Sinking from "../Elements/DisplayMessages/Sinking";
import Winner from "../Elements/DisplayMessages/Winner";

export default function MessageBoard({ messages }) {
  return (
    <div>
      <Shot shot={messages.shot} />
      <Sinking sinking={messages.sinking} />
      <Winner win={messages.win} />
    </div>
  )
}