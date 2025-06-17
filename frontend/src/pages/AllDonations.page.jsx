import MyNavbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";

const AllDonations = () => {

    const [donations, setDonations] = useState("");
    useEffect(()=>{
        const getDonations = async () => {
            const url = ""
        }
    })
  return (
    <div
      className="mt-12 relative flex size-full min-h-screen flex-col bg-[#1a1a1a] dark overflow-x-hidden"
      style={{ fontFamily: '"Public Sans", "Noto Sans", sans-serif' }}
    >
      <MyNavbar />
      <div className="layout-container flex h-screen grow flex-col">
        <div className="flex-grow mt-4">
          <p className="text-white p-4">Main content goes here.</p>
          
        </div>
        <hr />
        <footer className="flex justify-center bg-[#1a1a1a] py-10">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 text-center @container">
              <p className="text-[#adadad] text-base font-normal leading-normal mt-4">
                &copy; 2025 Community Fridge. All rights reserved.
              </p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AllDonations;
