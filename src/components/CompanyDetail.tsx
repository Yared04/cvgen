import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { AppContext } from "@/pages/_app";
import { useRouter } from 'next/router';
import Loading from "./Common/Loading";
import supabase from "@/utils/supabaseClient";
export const CompanyDetails = ({ }) => {
    const [companyName, setCompanyName] = useState('')
  const [position, setPosition] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const {state,setState} = useContext(AppContext)
    const [userId, setUserId] = useState('');

  const router = useRouter();
  useEffect(() => {
    const getCurUser = async () => {
      
      var userId = (await supabase.auth.getUser()).data.user.id;
      setUserId(userId);
    };

    getCurUser();
  }, []);
  const submitHandler = async (event) => {
  
  
    event.preventDefault()
    try {
      const postData = {
        user_id: userId,
        position: position,
        description: description,
        message:'',
        company_name:companyName
      };
      setLoading(true)
      const response = await axios.post('https://resumeai-backend-1fe8.onrender.com/api/cover_letter', postData);
      setState({...state,chat:[...state.chat, response.data.message],coverLetter:response.data.cover_letter })
  
      router.push('/resume')
      setLoading(false)
    } catch (error) {
      console.error('Error making POST request:', error);
    }
  };
    return (
        <div className="text-text-secondary p-6 w-full">
          <h1 className="my-auto text-black  text-xl">Company Details <span className="my-auto text-[#ff0000] text-xl">*</span></h1>
          {
            loading ? <Loading/> :

  <form onSubmit={submitHandler} action="">
    <div className="mt-4">
      
      <input
        className="border-2 rounded-md p-2 w-full h-10 m-2 text-text-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        id="company"
        name="company"
        type="text"
        placeholder="Comapany Name"
        required
        value={companyName} 
        onChange={e => setCompanyName(e.target.value)}
      />
    </div>
    <div className="mt-4">
      
      <input
        className="border-2 rounded-md p-2 w-full h-10 m-2 text-text-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        id="position"
        name="position"
        type="text"
        placeholder="Job Position"
        required
        value={position} 
        onChange={e => setPosition(e.target.value)}
      />
    </div>
    <div className="mt-4">

      <textarea
        className="border-2 rounded-md p-2 w-full h-32 m-2 text-text-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        id="jobDescription"
        name="jobDescription"
        placeholder="Job Description"
        required
        value={description} 
        onChange={e => setDescription(e.target.value)}
      ></textarea>
    </div>
    <div className="flex justify-center mt-4">
      
      <button type="submit" className="bg-primary w-[60%] hover:shadow-xl text-white font-bold py-2 px-4 m-2 rounded ">
         Generate
      </button>
    </div>
  </form>
          }
</div>
    );
};


