import React, { useEffect, useState } from "react";

const imgLinks = [
  "https://img.freepik.com/premium-vector/traditional-mizorami-cuisine-food-illustration_1120563-34709.jpg?semt=ais_hybrid&w=740",
  "https://img.freepik.com/premium-vector/delicious-indian-food-illustration-white-background_1322206-34191.jpg",
  "https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-indian-food-png-image_6882307.png",
  "https://img.freepik.com/free-vector/hand-drawn-indian-cuisine-illustrations_23-2149353847.jpg",
];

const DonatedFood = (props) => {
  const randomLink = imgLinks[Math.floor(Math.random() * imgLinks.length)];
  const [compChanged, setCompChanged] = useState(false);
  
  const handlePickup = async (e) => {
    e.preventDefault();
    const donationId = props?.value?._id;
    const url = "http://localhost:8080/api/pickups/";
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
        className="rounded-t-lg h-48 w-full object-cover"
        src={randomLink}
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
    </div>
  );
};

export default DonatedFood;
