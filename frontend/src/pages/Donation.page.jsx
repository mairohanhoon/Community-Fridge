import React from "react";

const DonationsPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 font-sans text-white">
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
            {/* Input field for Your Name */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-white text-base font-medium leading-normal pb-2">
                  Your Name
                </p>
                <input
                  placeholder="Enter your name"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#363636] focus:border-none h-14 placeholder:text-[#adadad] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            {/* Input field for Contact Information */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-white text-base font-medium leading-normal pb-2">
                  Contact Information
                </p>
                <input
                  placeholder="Email or Phone Number"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#363636] focus:border-none h-14 placeholder:text-[#adadad] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            {/* Dropdown for Type of Food */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-white text-base font-medium leading-normal pb-2">
                  Type of Food
                </p>
                <select className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#363636] focus:border-none h-14 placeholder:text-[#adadad] p-4 text-base font-normal leading-normal appearance-none">
                  {" "}
                  {/* Added appearance-none to remove default select arrow for custom styling */}
                  <option value="one">Select food type</option>
                  <option value="two">Cooked Meals</option>
                  <option value="three">Fresh Produce</option>
                  <option value="four">Canned Goods</option>
                  <option value="five">Baked Goods</option>
                </select>
              </label>
            </div>
            {/* Input field for Quantity */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-white text-base font-medium leading-normal pb-2">
                  Quantity
                </p>
                <input
                  placeholder="Number of servings"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#363636] focus:border-none h-14 placeholder:text-[#adadad] p-4 text-base font-normal leading-normal"
                  value=""
                  type="number" // Added type number for quantity
                />
              </label>
            </div>
            {/* Input field for Pick-up Time */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-white text-base font-medium leading-normal pb-2">
                  Pick-up Time
                </p>
                <input
                  placeholder="Preferred pick-up time"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#363636] focus:border-none h-14 placeholder:text-[#adadad] p-4 text-base font-normal leading-normal"
                  value=""
                  type="datetime-local" // Changed to datetime-local for better time input
                />
              </label>
            </div>
            {/* Submit Donation button */}
            <div className="flex px-4 py-3 justify-end">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-black text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-800 transition-colors">
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
        <footer className="flex justify-center bg-gray-800 py-10 mt-8">
          {" "}
          {/* Added background to footer */}
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 text-center @container">
              <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <a
                  className="text-[#adadad] text-base font-normal leading-normal min-w-40 hover:text-white transition-colors"
                  href="#"
                >
                  About Us
                </a>
                <a
                  className="text-[#adadad] text-base font-normal leading-normal min-w-40 hover:text-white transition-colors"
                  href="#"
                >
                  Contact
                </a>
                <a
                  className="text-[#adadad] text-base font-normal leading-normal min-w-40 hover:text-white transition-colors"
                  href="#"
                >
                  Privacy Policy
                </a>
              </div>
              <p className="text-[#adadad] text-base font-normal leading-normal mt-4">
                &copy; 2024 Community Fridge. All rights reserved.
              </p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DonationsPage;
