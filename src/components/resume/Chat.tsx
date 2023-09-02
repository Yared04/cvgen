import React, { useContext } from "react";
import { AppContext } from "@/pages/_app";

const Chat = () => {
    const {state, setState} = useContext(AppContext)
  return (
    <div>
        <input type='text' />
    </div>
  )
}

export default Chat