import React, { useEffect, useState } from "react";

const MyPickupComp = (props) => {
  const [donation, setDonation] = useState("");
  console.log(donation);
  
  useEffect(() => {
    const getDonation = async () => {
      const url = "http://localhost:8080/api/donor/get-donation";
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          donationId : props?.value?.donation,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const result = await response.json();
      console.log("result" + result);
      if (result.success) {
        setDonation(result.donatedF[0]);
      }
    };
    getDonation();
  }, []);
  return (
    <tr className="border-t border-t-[#4d4d4d]">
      <td className="table-5d9e3161-86fb-4a70-8b73-ae73572dca00-column-120 h-[72px] px-4 py-2 w-[400px] text-white text-sm font-normal leading-normal">
        {donation?.foodName}
      </td>
      <td className="table-5d9e3161-86fb-4a70-8b73-ae73572dca00-column-240 h-[72px] px-4 py-2 w-[400px] text-[#adadad] text-sm font-normal leading-normal">
        {donation?.quantity}
      </td>
      <td className="table-5d9e3161-86fb-4a70-8b73-ae73572dca00-column-360 h-[72px] px-4 py-2 w-[400px] text-[#adadad] text-sm font-normal leading-normal">
        {donation?.foodDescription}
      </td>
      <td className="table-5d9e3161-86fb-4a70-8b73-ae73572dca00-column-480 h-[72px] px-4 py-2 w-[400px] text-[#adadad] text-sm font-normal leading-normal">
        {donation?.expiryDate}
      </td>
      <td className="table-5d9e3161-86fb-4a70-8b73-ae73572dca00-column-600 h-[72px] px-4 py-2 w-[400px] text-[#adadad] text-sm font-normal leading-normal">
        {donation?.location?.address}, {donation?.location?.latitude},{" "}
        {donation?.location?.longitude}
      </td>
      <td className="table-5d9e3161-86fb-4a70-8b73-ae73572dca00-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#363636] text-white text-sm font-medium leading-normal w-full">
          <span className="truncate">
            {donation?.isPickedUp ? `Picked Up` : `Available`}{" "}
          </span>
        </button>
      </td>
    </tr>
  );
};
export default MyPickupComp;
