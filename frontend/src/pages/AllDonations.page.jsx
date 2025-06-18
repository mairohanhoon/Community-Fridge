import MyNavbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import LoadingPage from "./Loading.page";
import { SparklesText } from "@/components/magicui/sparkles-text";
import DonatedFood from "@/components/DonatedFoodComp.jsx";

const AllDonations = () => {
  const [donations, setDonations] = useState("");
  useEffect(
    () => {
      const getDonations = async () => {
        const url = "http://localhost:8080/api/pickups/allDonations";
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const result = await response.json();
        console.log(result);
        if (result.success) {
          setDonations(result.allDonations);
        }
      };
      getDonations();
    },
    [],
    donations
  );

  if (!donations) {
    return <LoadingPage />;
  }

  return (
    <div
      className="mt-12 relative flex size-full min-h-screen flex-col bg-[#1a1a1a] dark overflow-x-hidden"
      style={{ fontFamily: '"Public Sans", "Noto Sans", sans-serif' }}
    >
      <MyNavbar />
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex-grow mt-4">
          <div className="flex flex-wrap justify-center gap-3 p-4">
            <div className="text-white text-2xl font-extrabold">
              Available Donations
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3 p-4">
            {donations.length > 0 ? ( // Removed the outer curly brace here
              donations.map((data, index) => (
                <DonatedFood key={data.id || index} value={data} />
              ))
            ) : (
              <div className="flex items-center justify-center h-screen">
                <div className="text-white text-2xl font-extrabold">
                  <SparklesText>No Donation's Available</SparklesText>
                </div>
              </div>
            )}
          </div>
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
