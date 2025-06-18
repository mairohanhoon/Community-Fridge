import { SparklesText } from "@/components/magicui/sparkles-text";
import MyNavbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import LoadingPage from "./Loading.page";
import MyPickupComp from "@/components/MyPickupComp";

const MyPickupsPage = () => {
  const [donations, setDonations] = useState("");
  useEffect(
    () => {
      const getDonations = async () => {
        const url = "http://localhost:8080/api/pickups/my-pickups";
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
          setDonations(result.myPickups);
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
      className="mt-12 relative flex size-full min-h-screen flex-col bg-[#1a1a1a] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Public Sans", "Noto Sans", sans-serif' }}
    >
      <MyNavbar />
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-center gap-3 p-4">
              <SparklesText className="text-white text-3xl">
                My Pickups
              </SparklesText>
            </div>
            <div className="px-4 py-3 @container">
              <div className="flex overflow-hidden rounded-xl border border-[#4d4d4d] bg-[#1a1a1a]">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-neutral-800">
                      <th className="table-5d9e3161-86fb-4a70-8b73-ae73572dca00-column-120 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                        Food Name
                      </th>
                      <th className="table-5d9e3161-86fb-4a70-8b73-ae73572dca00-column-240 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                        Quantity
                      </th>
                      <th className="table-5d9e3161-86fb-4a70-8b73-ae73572dca00-column-360 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                        Description
                      </th>
                      <th className="table-5d9e3161-86fb-4a70-8b73-ae73572dca00-column-480 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                        Expiry Date
                      </th>
                      <th className="table-5d9e3161-86fb-4a70-8b73-ae73572dca00-column-600 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                        Location
                      </th>
                      <th className="table-5d9e3161-86fb-4a70-8b73-ae73572dca00-column-720 px-4 py-3 text-left text-white w-60 text-sm font-medium leading-normal">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {donations.length > 0 ? ( // Removed the outer curly brace here
                      donations.map((data, index) => (
                        <MyPickupComp key={data.id || index} value={data} />
                      ))
                    ) : (
                      <tr>
                        <td className="table-5d9e3161-86fb-4a70-8b73-ae73572dca00-column-120 h-[72px] px-4 py-2 w-[400px] text-white text-sm font-normal leading-normal">
                          Loading
                        </td>
                        <td className="table-5d9e3161-86fb-4a70-8b73-ae73572dca00-column-240 h-[72px] px-4 py-2 w-[400px] text-[#adadad] text-sm font-normal leading-normal">
                          Loading
                        </td>
                        <td className="table-5d9e3161-86fb-4a70-8b73-ae73572dca00-column-360 h-[72px] px-4 py-2 w-[400px] text-[#adadad] text-sm font-normal leading-normal">
                          Loading
                        </td>
                        <td className="table-5d9e3161-86fb-4a70-8b73-ae73572dca00-column-480 h-[72px] px-4 py-2 w-[400px] text-[#adadad] text-sm font-normal leading-normal">
                          Loading
                        </td>
                        <td className="table-5d9e3161-86fb-4a70-8b73-ae73572dca00-column-600 h-[72px] px-4 py-2 w-[400px] text-[#adadad] text-sm font-normal leading-normal">
                          Loading
                        </td>
                        <td className="table-5d9e3161-86fb-4a70-8b73-ae73572dca00-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                          Loading
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPickupsPage;
