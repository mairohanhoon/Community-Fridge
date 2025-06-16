import React from "react";

const DonationsPage = () => {
    
  return (
    <div class="layout-container flex h-full grow flex-col">
      <div class="px-40 flex flex-1 justify-center py-5">
        <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div class="@container">
            <div class="@[480px]:p-4">
              <div
                class="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                style='background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDwRR8Bh9tZ0Yw24dTPgoHlcQ5FPjMB8oQX7NV0J0dp-89DY5hCry0TOnIbKBvyhObCdi0S1ydjxDpGL6hn7i4RUidQL3hZf2qU1_OetWLdSddgBxlvjiKf1cUJQR6390vThm1vb3CvUBplDuFPdeNuAH3m55kuAbugYhIWBpXtzj4rM8uS_kzAe8xjt-bDLVm9QPJVGzDfhIOXJO0hsAPzzeYA2QKIBUISSxDYClUKmTpmxSNbQzecp-q6HbzcRiKHNQAinAekhCE");'
              >
                <div class="flex flex-col gap-2 text-center">
                  <h1 class="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                    Donate Meals, Nourish Our Community
                  </h1>
                  <h2 class="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                    Your contribution makes a difference. Donate surplus meals
                    and help us combat food insecurity in our neighborhood.
                  </h2>
                </div>
                <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-black text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                  <span class="truncate">Learn More</span>
                </button>
              </div>
            </div>
          </div>
          <h2 class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Meal Donation Form
          </h2>
          <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p class="text-white text-base font-medium leading-normal pb-2">
                Your Name
              </p>
              <input
                placeholder="Enter your name"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#363636] focus:border-none h-14 placeholder:text-[#adadad] p-4 text-base font-normal leading-normal"
                value=""
              />
            </label>
          </div>
          <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p class="text-white text-base font-medium leading-normal pb-2">
                Contact Information
              </p>
              <input
                placeholder="Email or Phone Number"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#363636] focus:border-none h-14 placeholder:text-[#adadad] p-4 text-base font-normal leading-normal"
                value=""
              />
            </label>
          </div>
          <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p class="text-white text-base font-medium leading-normal pb-2">
                Type of Food
              </p>
              <select class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#363636] focus:border-none h-14 bg-[image:--select-button-svg] placeholder:text-[#adadad] p-4 text-base font-normal leading-normal">
                <option value="one">Select food type</option>
                <option value="two">two</option>
                <option value="three">three</option>
              </select>
            </label>
          </div>
          <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p class="text-white text-base font-medium leading-normal pb-2">
                Quantity
              </p>
              <input
                placeholder="Number of servings"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#363636] focus:border-none h-14 placeholder:text-[#adadad] p-4 text-base font-normal leading-normal"
                value=""
              />
            </label>
          </div>
          <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p class="text-white text-base font-medium leading-normal pb-2">
                Pick-up Time
              </p>
              <input
                placeholder="Preferred pick-up time"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#363636] focus:border-none h-14 placeholder:text-[#adadad] p-4 text-base font-normal leading-normal"
                value=""
              />
            </label>
          </div>
          <div class="flex px-4 py-3 justify-end">
            <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-black text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span class="truncate">Submit Donation</span>
            </button>
          </div>
          <h2 class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            How Your Donation Helps
          </h2>
          <p class="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
            Your generous donation directly supports our community fridge
            initiative, providing nutritious meals to individuals and families
            facing food insecurity. By donating surplus food, you reduce waste
            and ensure that everyone has access to healthy options. Thank you
            for your contribution to a stronger, more nourished community.
          </p>
          <h2 class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Thank You!
          </h2>
          <p class="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
            We appreciate your willingness to donate meals. Your contribution
            will help us make a positive impact on the lives of many. Once your
            donation is submitted, our team will contact you to confirm the
            details and arrange the pick-up. Thank you for being a part of our
            community!
          </p>
        </div>
      </div>
      <footer class="flex justify-center">
        <div class="flex max-w-[960px] flex-1 flex-col">
          <footer class="flex flex-col gap-6 px-5 py-10 text-center @container">
            <div class="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
              <a
                class="text-[#adadad] text-base font-normal leading-normal min-w-40"
                href="#"
              >
                About Us
              </a>
              <a
                class="text-[#adadad] text-base font-normal leading-normal min-w-40"
                href="#"
              >
                Contact
              </a>
              <a
                class="text-[#adadad] text-base font-normal leading-normal min-w-40"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
            <p class="text-[#adadad] text-base font-normal leading-normal">
              @2024 Community Fridge. All rights reserved.
            </p>
          </footer>
        </div>
      </footer>
    </div>
  );
};

export default DonationsPage;
