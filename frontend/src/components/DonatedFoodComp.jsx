import { handleSuccess } from "@/utils";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const DonatedFood = (props) => {
  const [compChanged, setCompChanged] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {}, [], compChanged);
  const handlePickup = async (e) => {
    e.preventDefault();
    const donationId = props?.value?._id;
    const url = `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/pickups/`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          donationId,
        }),
      });
      const result = await response.json();
      console.log(result);
      if (result.success) {
        handleSuccess(result.message);
        setTimeout(() => {
          navigate("/my-pickups");
        }, 750);
      }
    } catch (error) {
      console.log("Donated Food Pickup Error : ", error);
    }
    setCompChanged(true);
  };
  return (
    <div
      className="w-1/4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
      style={{ fontFamily: '"Public Sans", "Noto Sans", sans-serif' }}
    >
      {/* Add a fixed height to the image or its container and use object-cover */}
      <img
        className="rounded-t-lg w-full object-cover"
        src="https://raw.githubusercontent.com/mairohanhoon/Community-Fridge/refs/heads/main/frontend/src/assets/food-donations-vector.png"
        alt="Food item"
      />
      <div className="p-5">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props?.value?.foodName}
          </h5>
        </div>
        <div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props?.value?.foodDescription}
          </p>
        </div>
        <div>
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            Quantity :{" "}
            <span className="mb-2 text-lg font-medium  tracking-tight text-gray-900 dark:text-white">
              {" "}
              {props?.value?.quantity}
            </span>
          </h5>
        </div>
        <div>
          <h5 className="mb-2 text-lg font-semibold  tracking-tight text-gray-900 dark:text-white">
            Expiry Date :{" "}
            <span className="mb-2 text-lg font-medium  tracking-tight text-gray-900 dark:text-white">
              {" "}
              {props?.value?.expiryDate}
            </span>{" "}
          </h5>
        </div>
        <div>
          <h5 className="mb-2 text-lg font-semibold  tracking-tight text-gray-900 dark:text-white">
            Address :{" "}
            <span className="mb-2 text-lg font-medium  tracking-tight text-gray-900 dark:text-white">
              {" "}
              {props?.value?.address}
            </span>{" "}
          </h5>
        </div>
        <div>
          <h5 className="mb-2 text-lg font-semibold  tracking-tight text-gray-900 dark:text-white">
            Latitude :{" "}
            <span className="mb-2 text-lg font-medium  tracking-tight text-gray-900 dark:text-white">
              {" "}
              {props?.value?.latitude}
            </span>{" "}
          </h5>
        </div>
        <div>
          <h5 className="mb-2 text-lg font-semibold  tracking-tight text-gray-900 dark:text-white">
            Longitude :{" "}
            <span className="mb-2 text-lg font-medium  tracking-tight text-gray-900 dark:text-white">
              {" "}
              {props?.value?.longitude}
            </span>{" "}
          </h5>
        </div>

        <button
          className="inline-flex items-center px-3 py-2 text-lg font-bold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={(e) => handlePickup(e)}
        >
          Schedule Pickup
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DonatedFood;
