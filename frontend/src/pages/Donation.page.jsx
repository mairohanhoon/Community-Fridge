import MyNavbar from "@/components/Navbar";
import { handleError, handleSuccess } from "../utils.js";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

const DonationsPage = () => {
  const [foodName, setFoodName] = useState("");
  const [foodDescription, setFoodDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [address, setAddress] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleSubmitDonation = async (e) => {
    e.preventDefault();
    console.log("Toooooo");

    if (
      !foodName ||
      !foodDescription ||
      !quantity ||
      !expiryDate ||
      !address ||
      !latitude ||
      !longitude
    ) {
      console.log("Tooo");
      return handleError("All feilds are required");
    }
    try {
      const url = "http://localhost:8080/api/donor/register";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          foodName,
          foodDescription,
          quantity,
          expiryDate,
          address,
          latitude,
          longitude,
        }),
      });
      const result = await response.json();
      console.log(result);
      if (result.success) {
        handleSuccess("Donation Registered Successfully");
        setFoodName("");
        setFoodDescription("");
        setQuantity("");
        setExpiryDate("");
        setAddress("");
        setLatitude("");
        setLongitude("");
      } else {
        handleError(result.message);
      }
    } catch (error) {
      console.log("Donation Page Error " + error);
    }
  };

  return (
    <div className="mt-12 relative flex size-full min-h-screen flex-col bg-[#1a1a1a] dark group/design-root overflow-x-hidden">
      <MyNavbar />
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center py-5 px-4 sm:px-10 md:px-20 lg:px-40">
          {" "}
          {/* Adjusted padding for responsiveness */}
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDwRR8Bh9tZ0Yw24dTPgoHlcQ5FPjMB8oQX7NV0J0dp-89DY5hCry0TOnIbKBvyhObCdi0S1ydjxDpGL6hn7i4RUidQL3hZf2qU1_OetWLdSddgBxlvjiKf1cUJQR6390vThm1vb3CvUBplDuFPdeNuAH3m55kuAbugYhIWBpXtzj4rM8uS_kzAe8xjt-bDLVm9QPJVGzDfhIOXJO0hsAPzzeYA2QKIBUISSxDYClUKmTpmxSNbQzecp-q6HbzcRiKHNQAinAekhCE")',
                  }}
                >
                  <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                      Donate Meals, Nourish Our Community
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      Your contribution makes a difference. Donate surplus meals
                      and help us combat food insecurity in our neighborhood.
                    </h2>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-black text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-gray-800 transition-colors">
                    <span className="truncate">Learn More</span>
                  </button>
                </div>
              </div>
            </div>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Meal Donation Form
            </h2>

            {/* Input field for Food Name */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-white text-base font-medium leading-normal pb-2">
                  Food Name
                </p>
                <input
                  onChange={(e) => setFoodName(e.target.value)}
                  placeholder="Enter Food Name"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#363636] focus:border-none h-14 placeholder:text-[#adadad] p-4 text-base font-normal leading-normal"
                  value={foodName}
                />
              </label>
            </div>

            {/* Input field for Food Description */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-white text-base font-medium leading-normal pb-2">
                  Food Description
                </p>
                <input
                  onChange={(e) => setFoodDescription(e.target.value)}
                  placeholder="Enter Food Description"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#363636] focus:border-none h-14 placeholder:text-[#adadad] p-4 text-base font-normal leading-normal"
                  value={foodDescription}
                />
              </label>
            </div>

            {/* Input field for Quantity */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-white text-base font-medium leading-normal pb-2">
                  Food Quantity
                </p>
                <input
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="Enter Food Quantity"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#363636] focus:border-none h-14 placeholder:text-[#adadad] p-4 text-base font-normal leading-normal"
                  value={quantity}
                />
              </label>
            </div>

            {/* Input field for Expiry Date */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-white text-base font-medium leading-normal pb-2">
                  Expiry Date
                </p>
                <input
                  placeholder="Enter Expiry Date"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#363636] focus:border-none h-14 placeholder:text-[#adadad] p-4 text-base font-normal leading-normal"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  type="datetime-local" // Changed to datetime-local for better time input
                />
              </label>
            </div>

            {/* Input field for Address */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-white text-base font-medium leading-normal pb-2">
                  Pickup Address
                </p>
                <input
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter Pickup Address"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#363636] focus:border-none h-14 placeholder:text-[#adadad] p-4 text-base font-normal leading-normal"
                  value={address}
                />
              </label>
            </div>

            {/* Input field for Latitude */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-white text-base font-medium leading-normal pb-2">
                  Address Latitude
                </p>
                <input
                  onChange={(e) => setLatitude(e.target.value)}
                  placeholder="Enter Address Latitude"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#363636] focus:border-none h-14 placeholder:text-[#adadad] p-4 text-base font-normal leading-normal"
                  value={latitude}
                />
              </label>
            </div>

            {/* Input field for Longitude */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-white text-base font-medium leading-normal pb-2">
                  Address Longitude
                </p>
                <input
                  onChange={(e) => setLongitude(e.target.value)}
                  placeholder="Enter Address Longitude"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#363636] focus:border-none h-14 placeholder:text-[#adadad] p-4 text-base font-normal leading-normal"
                  value={longitude}
                />
              </label>
            </div>

            {/* Submit Donation button */}
            <div className="flex px-4 py-3 justify-end">
              <button
                onClick={(e) => handleSubmitDonation(e)}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-black text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-800 transition-colors"
              >
                <span className="truncate">Submit Donation</span>
              </button>
            </div>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              How Your Donation Helps
            </h2>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              Your generous donation directly supports our community fridge
              initiative, providing nutritious meals to individuals and families
              facing food insecurity. By donating surplus food, you reduce waste
              and ensure that everyone has access to healthy options. Thank you
              for your contribution to a stronger, more nourished community.
            </p>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Thank You!
            </h2>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              We appreciate your willingness to donate meals. Your contribution
              will help us make a positive impact on the lives of many. Once
              your donation is submitted, our team will contact you to confirm
              the details and arrange the pick-up. Thank you for being a part of
              our community!
            </p>
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
      <ToastContainer />
    </div>
  );
};

export default DonationsPage;
