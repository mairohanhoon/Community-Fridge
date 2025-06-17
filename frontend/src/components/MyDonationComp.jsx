import React from "react";

const MyDonationComp = (props) => {
  return (
    <tr className="border-t border-t-[#4d4d4d]">
      <td className="table-5d9e3161-86fb-4a70-8b73-ae73572dca00-column-120 h-[72px] px-4 py-2 w-[400px] text-white text-sm font-normal leading-normal">
        {props?.value?.foodName}
      </td>
      <td className="table-5d9e3161-86fb-4a70-8b73-ae73572dca00-column-240 h-[72px] px-4 py-2 w-[400px] text-[#adadad] text-sm font-normal leading-normal">
        {props?.value?.quantity}
      </td>
      <td className="table-5d9e3161-86fb-4a70-8b73-ae73572dca00-column-360 h-[72px] px-4 py-2 w-[400px] text-[#adadad] text-sm font-normal leading-normal">
        {props?.value?.foodDescription}
      </td>
      <td className="table-5d9e3161-86fb-4a70-8b73-ae73572dca00-column-480 h-[72px] px-4 py-2 w-[400px] text-[#adadad] text-sm font-normal leading-normal">
        {props?.value?.expiryDate}
      </td>
      <td className="table-5d9e3161-86fb-4a70-8b73-ae73572dca00-column-600 h-[72px] px-4 py-2 w-[400px] text-[#adadad] text-sm font-normal leading-normal">
        {props?.value?.location?.address}, {props?.value?.location?.latitude},{" "}
        {props?.value?.location?.longitude}
      </td>
      <td className="table-5d9e3161-86fb-4a70-8b73-ae73572dca00-column-720 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#363636] text-white text-sm font-medium leading-normal w-full">
          <span className="truncate">
            {props?.value?.isPickedUp ? `Picked Up` : `Available`}{" "}
          </span>
        </button>
      </td>
    </tr>
  );
};

export default MyDonationComp;
