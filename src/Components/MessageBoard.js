import React from "react";
import Shot from "./DisplayMessages/Shot";
import Sinking from "./DisplayMessages/Sinking";
import Winner from "./DisplayMessages/Winner";

export default function MessageBoard({ messages }) {
  return (
    <div>
      <Shot shot={messages.shot} />
      <Sinking sinking={messages.sinking} />
      <Winner win={messages.win} />
    </div>
  )
}