import React, { useState } from "react";
import axios from "axios";

function RandomProfile() {
  const [profile, SetProfil] = useState("");
  const [email, SetEmail] = useState("");
  const [number, SetNumber] = useState("");
  const [date, setDate] = useState("");

  const profileData = async () => {
    try {
      const res = await axios.get("https://randomuser.me/api");
      const data = res.data.results[0];
      console.log(data);
      SetNumber(data.phone);
      SetEmail(data.email);
      SetProfil(data.picture.large);
      setDate(data.dob.date);
      console.log(data.picture);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Place h-screen  rounded-[8px] bg-[#4a1621] text-[#744350] font-bold  flex flex-col gap-[15px] justify-center items-center ">
      <div className="text-[#9a596a]  mt-[-90px] mb-[70px] text-[32px] font-extrabold">
        <h1>Random Profile Generator</h1>
      </div>
      <div className="Placeprofile rounded-[8px] w-[40%] h-[300px] flex flex-col text-center items-center gap-[20px] pt-[20px] bg-[#c87fad] ">
        <div className="PlacePhoto w=[100%] rounded-[8px]">
          <img src={profile} alt="profile" />
        </div>
        <div className="PlaceNumber w-[100%] "><p>{number}</p></div>
        <div className="PlaceNumber w-[100%] "><p>{email}</p></div>
        <div className="PlaceNumber w-[100%] "><p>{date}</p></div>
      </div>
      <div className="PlaceInput rounded-[8px] w-[40%] h-[30px] text-center py-[3px] cursor-pointer bg-[#c87fad] ">
        <button onClick={profileData}>Change data for click me </button>
      </div>
    </div>
  );
}

export default RandomProfile;
