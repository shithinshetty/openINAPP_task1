import React, { useState } from "react";
import BottomArrow from "../public/BottomArrow.png";
import PieChart from "../public/PieChart.png";
import Image from "next/image";
import AddProfile from "../public/AddProfile.png";
import whatsapp from "../public/whatsapp.png";
import EmailLogo from "../public/EmailLogo.png";
import instagramLogo from "../public/instagramLogo.png";
import ytLogo from "../public/ytLogo.png";
import ProfileCards from "./ProfileCards";

const BottomCards = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ytLink, setYtLiink] = useState("");
  const [instaLink, setInstaLink] = useState("");
  const [profilename, setProfileName] = useState("");
  const [profileemail, setProfileEmail] = useState("");
  const [profilephone, setProfilePhone] = useState("");
  const [profileytLink, setProfileYtLiink] = useState("");
  const [profileinstaLink, setProfileInstaLink] = useState("");
  const [basic, setBasic] = useState(false);
  const [social, setSocial] = useState(true);
  const [details, setDetails] = useState(false);

  const handleModal = () => {
    const showModal = document.querySelector(".show-modal");
    showModal.classList.remove("hidden");
  };
  const hideModal = () => {
    const showModal = document.querySelector(".show-modal");
    showModal.classList.add("hidden");
  };

  const handleNext = () => {
    //next
    const nextBtn = document.querySelector("#nextBtn");
    nextBtn.classList.add("hidden");

    //back
    const back = document.querySelector("#back");
    back.classList.remove("hidden");

    //submit
    const submitBtn = document.querySelector("#submitBtn");
    submitBtn.classList.remove("hidden");

    setSocial(false);
    setBasic(true);
    const borderBasic = document.querySelector("#basic");
    const borderSocial = document.querySelector("#social");

    borderBasic.classList.remove("border-b-[#3F84F8]");
    borderBasic.classList.add("border-b-gray");

    borderSocial.classList.remove("border-b-gray");
    borderSocial.classList.add("border-b-[#3F84F8]");
  };
  const handleBack = () => {
    //next
    const nextBtn = document.querySelector("#nextBtn");
    nextBtn.classList.remove("hidden");

    //back
    const back = document.querySelector("#back");
    back.classList.add("hidden");

    //submit
    const submitBtn = document.querySelector("#submitBtn");
    submitBtn.classList.add("hidden");

    setSocial(true);
    setBasic(false);

    const borderBasic = document.querySelector("#basic");
    const borderSocial = document.querySelector("#social");

    borderBasic.classList.remove("border-b-gray");
    borderBasic.classList.add("border-b-[#3F84F8]");

    borderSocial.classList.remove("border-b-[#3F84F8]");
    borderSocial.classList.add("border-b-gray");
  };

  const handleSubmit = () => {
    setProfileEmail(email);
    setProfileName(name);
    setProfilePhone(phone);
    setProfileInstaLink(instaLink);
    setProfileYtLiink(ytLink);
    setName("");
    setEmail("");
    setPhone("");
    setInstaLink("");
    setYtLiink("");
    setDetails(true);

    setBasic(false);
    setSocial(true);
    //next
    const nextBtn = document.querySelector("#nextBtn");
    nextBtn.classList.remove("hidden");

    //back
    const back = document.querySelector("#back");
    back.classList.add("hidden");

    //submit
    const submitBtn = document.querySelector("#submitBtn");
    submitBtn.classList.add("hidden");

    const borderBasic = document.querySelector("#basic");
    const borderSocial = document.querySelector("#social");

    borderBasic.classList.remove("border-b-gray");
    borderBasic.classList.add("border-b-[#3F84F8]");

    borderSocial.classList.remove("border-b-[#3F84F8]");
    borderSocial.classList.add("border-b-gray");

    const showModal = document.querySelector(".show-modal");
    showModal.classList.add("hidden");
  };
  return (
    <div id="bottomCardDiv" className="w-full ">
      <div className="show-modal  rounder-[10px] h-screen w-[110%] fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-30 hidden">
        <div
          id="MODAL"
          className="bg-white rounded-[16px] shadow-lg w-[544px] h-[520px]"
        >
          <div className="border-b py-2 px-4 flex justify-between items-center h-[66px] ">
            <h2 className="font-bold">ADD NEW PROFILE</h2>
            <button onClick={hideModal} className="text-[200]">
              &times;
            </button>
          </div>
          <div className="h-[377px]">
            <div
              id="ModalPRO"
              className="flex justify-around border-b-blue mx-auto w-[480px] mt-5"
            >
              <h2
                id="basic"
                className="border-b-4 border-b-[#3F84F8] w-1/2 text-center font-bold"
              >
                BASIC
              </h2>
              <h2
                id="social"
                className="border-b-4 border-b-gray w-1/2 text-center ml-7 font-bold"
              >
                SOCIAL
              </h2>
            </div>
            {social && (
              <div className="flex flex-col justify-between p-4 ">
                <div className="flex flex-col mb-3">
                  <label htmlFor="Name">Enter Name*</label>
                  <input
                    type="text"
                    id="Name"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Eg. John Doe"
                    className="py-[16px] px-[12px] border border-gray-300 rounded-[12px] mb-3"
                  />
                </div>
                <div className="flex flex-col mb-3">
                  <label htmlFor="Email">Enter Email*</label>
                  <input
                    type="email"
                    id="Email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Eg. John@xyz.com"
                    className="py-[16px] px-[12px] border border-gray-300 rounded-[12px] mb-3"
                  />
                </div>
                <div className="flex flex-col mb-3">
                  <label htmlFor="Phone">Enter Phone*</label>
                  <input
                    type="number"
                    id="Phone"
                    value={phone}
                    required
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Eg.  9123456789"
                    className="py-[16px] px-[12px] border border-gray-300 rounded-[12px] mb-3"
                  />
                </div>
              </div>
            )}
            {basic && (
              <div className="flex flex-col justify-between p-4">
                <div className="flex flex-col mb-3">
                  <label className="mb-5 text-underline" htmlFor="instaLink">
                    Instagram Link{" "}
                    <span className="font-extralight">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="instaLink"
                    value={instaLink}
                    onChange={(e) => setInstaLink(e.target.value)}
                    placeholder="Eg. ..instagram.com/username"
                    className="py-[16px] px-[12px] border border-gray-300 rounded-[12px] mb-5 "
                  />
                </div>
                <div className="flex flex-col mb-3">
                  <label className="mb-5 text-underline" htmlFor="ytLink">
                    Youtube Link{" "}
                    <span className="font-extralight">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="ytLink"
                    value={ytLink}
                    onChange={(e) => setYtLiink(e.target.value)}
                    placeholder="Eg. ..youtube.com/username"
                    className="py-[16px] px-[12px] border border-gray-300 rounded-[12px] "
                  />
                </div>
              </div>
            )}
          </div>
          <div className="mr-4 h-[88px] flex justify-end">
            <button
              id="back"
              className="p-3 w-[64px] h-[40px] rounded-[8px] hidden"
              onClick={handleBack}
            >
              Back
            </button>
            <button
              id="nextBtn"
              className="p-3 bg-[#3E84F8] w-fit-content h-[40px] rounded-[8px] mb-3"
              onClick={handleNext}
            >
              Next
            </button>
            <button
              type="submit"
              id="submitBtn"
              className="p-3 bg-[#3E84F8] w-fit-content h-[40px] rounded-[8px] hidden"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="p-5 rounded-[20px] bg-white border-2 border-slate-300">
        <div className="flex justify-between items-center">
          <div className="flex-[7]">
            <h3 className="font-bold text-lg">Top Products</h3>
          </div>
          <div className="flex-[8] text-sm flex justify-end items-center gap-2">
            <p className="font-extralight">May - June 2021</p>
          </div>
        </div>

        <ProfileCards />
      </div>
      <div className="p-5 rounded-[20px] bg-white flex justify-center items-center modal border-2 border-slate-300">
        {!details && (
          <Image
            src={AddProfile}
            alt="Add Profile Button"
            className="cursor-pointer"
            onClick={handleModal}
          />
        )}
        {details && (
          <div
            className="flex flex-col justify-around h-full w-[100%]"
            id="profileCard"
          >
            <div className="text-left ml-4">
              <h3 className="font-bold text-lg">{profilename}</h3>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between items-center p-2 card-id">
                <div className="flex justify-start">
                  <Image
                    src={whatsapp}
                    alt="Phone"
                    width={36}
                    height={36}
                    className="p-2 rounded-[20px] cursor-pointer  transition duration-500 bg-[#E9F9EB] mr-5"
                  />
                  <p>{profilephone}</p>
                </div>
                <div className="flex justify-start">
                  <Image
                    src={instagramLogo}
                    alt="Instagram"
                    width={36}
                    height={36}
                    className="p-2 rounded-[20px] cursor-pointer  transition duration-500 bg-[#FFE9EC] mr-5 "
                  />
                  <span className="text-underline">{profileinstaLink}</span>
                </div>
              </div>
              <div className="flex justify-between items-center p-2 card-id">
                <div className="flex justify-start">
                  <Image
                    src={EmailLogo}
                    alt="Email"
                    width={36}
                    height={36}
                    className="p-2 rounded-[20px] cursor-pointer  transition duration-500 bg-[#EBE6F9] mr-5"
                  />
                  <span>{profileemail}</span>
                </div>
                <div className="flex justify-start">
                  <Image
                    src={ytLogo}
                    alt="Youtube"
                    width={36}
                    height={36}
                    className="p-2 rounded-[20px] cursor-pointer transition duration-500 bg-[#FFE9E9] mr-5"
                  />
                  <span>{profileytLink}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BottomCards;
