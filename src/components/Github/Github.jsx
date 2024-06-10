import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import fetchData from '../Hooks/fetchData.js';


function Github() {
  const [data, setData] = useState({})
  const [date, setDate] = useState('')

  const { userId } = useParams()

  const fetching = async () => {
    const fetchedData = await fetchData(userId)
    setData(fetchedData || "404")
  }

  useEffect(() => {
    if (data.created_at && data !== "404") {
      const tempDate = new Date(data.created_at);
      setDate(tempDate.toLocaleDateString());
    }
  }, [data])

  useEffect(() => {
    fetching()
  }, [])


  return (
    <div className="flex max-w-[600px] m-auto border-[1px] border-[#333] p-5 rounded-xl mt-5">
      <div className="w-full">
        <img className="rounded-full h-[130px] mb-5" src={data.avatar_url || "https://i.pinimg.com/originals/f0/48/9c/f0489ceb101a4bb4f8fd6f6f2c9e2762.jpg"} alt="" />
        <p className="text-white font-roboto font-bold text-2xl ">
          {data !== "404" ? `${data.name} (${date})` : "User Don't Exist"}
        </p>

        <a href={`https://github.com/${data.login || "User"}`} target="_blank"><span className="text-blue-400 font-roboto text-xl ">github/{data.login || 'User'}</span></a>


        <div className="text-white font-roboto text-2xl  w-full flex justify-center mt-10">
          <div className="border-r-[1px] border-[#333] text-center pr-5">
            <p>{data.public_repos || "0"}</p>
            <p className="text-[#43485C] text-[15px] sm:text-[18px]">Public Repos</p>
          </div>
          <div className="border-r-[1px] border-[#333] px-5 text-center">
            <p>{data.followers || "0"}</p>
            <p className="text-[#43485C] text-[15px] sm:text-[18px]">Followers</p>
          </div>
          <div className="pl-5 ">
            <p>{data.followers || "0"}</p>
            <p className="text-[#43485C] text-[15px] sm:text-[18px]">Following</p>
          </div>
        </div>
      </div>

    </div>
  )


}

export default Github