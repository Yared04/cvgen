import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "@/pages/_app";
import { BsSend } from "react-icons/bs";
import axios from "axios";
import Loading from "../Common/Loading";
import supabase from "@/utils/supabaseClient";

const Chat = () => {
  const { state, setState } = useContext(AppContext);
  const [message, setmessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState('');
  useEffect(() => {
    const getCurUser = async () => {
      
      var userId = (await supabase.auth.getUser()).data.user.id;
      setUserId(userId);
    };

    getCurUser();
  }, []);
  const submitHandler = async () => {
    setState({ ...state, chat: [...state.chat, message] });
    setmessage("");
    try {
      const postData = {
        user_id: userId,
        position: "",
        description: "",
        message: message,
        company_name: "",
      };
      setLoading(true);

      const response = await axios.post(
        "https://resumeai-backend-1fe8.onrender.com/api/cover_letter",
        postData
      );
      setState((prevState) => ({
        ...prevState,
        chat: [...prevState.chat, response.data.message],
        coverLetter: response.data.cover_letter || prevState.coverLetter,
      }));
      setLoading(false);
    } catch (error) {
      console.error("Error making POST request:", error);
    }
  };
  return (
    <div className="h-screen relative min-w-1/2">
      <div className="w-full ">
        <div className=" flex flex-col justify-end">
          {state.chat.map((message, index) => {
            return (
              <p
                key={index}
                className={`  w-full  p-4 px-3 rounded-md shadow-sm ${
                  index % 2 === 0 && "bg-[#F4F7FF] self-end"
                }`}
              >
                {message}
              </p>
            );
          })}
          {loading && <Loading />}
        </div>
        <div className="w-full flex fixed z-20 bottom-1 rounded-r-md ">
          <input
            onChange={(e) => setmessage(e.target.value)}
            value={message}
            type="text"
            className="w-[42%] z-20 p-5 border-2 rounded-l-md "
          />
          <button
            onClick={submitHandler}
            className=" w-[8%] flex justify-center bg-primary items-center rounded-r-md"
          >
            {" "}
            <BsSend color="white" size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
