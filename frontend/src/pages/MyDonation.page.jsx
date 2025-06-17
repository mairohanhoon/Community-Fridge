import { SparklesText } from "@/components/magicui/sparkles-text";
import MyNavbar from "@/components/Navbar";
import React, { useEffect } from "react";

const MyDonationPage = () => {

    useEffect(()=>{
        
    }, [])
    return (
    <div className="mt-12 relative flex size-full min-h-screen flex-col bg-[#1a1a1a] dark group/design-root overflow-x-hidden" style={{ fontFamily: '"Public Sans", "Noto Sans", sans-serif' }}>
        <MyNavbar/>
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-center gap-3 p-4">
              <SparklesText className='text-white text-3xl'>My Donations</SparklesText>
            </div>
            <div className="px-4 py-3 @container">
              <div className="flex overflow-hidden rounded-xl border border-[#4d4d4d] bg-[#1a1a1a]">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-neutral-800">
                      <th className="table-13e625a8-0b17-4798-9994-30cd0ae55e10-column-120 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">Food Item</th>
                      <th className="table-13e625a8-0b17-4798-9994-30cd0ae55e10-column-240 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">Quantity</th>
                      <th className="table-13e625a8-0b17-4798-9994-30cd0ae55e10-column-360 px-4 py-3 text-left text-white w-60 text-sm font-medium leading-normal">Status</th>
                      <th className="table-13e625a8-0b17-4798-9994-30cd0ae55e10-column-480 px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                        Pick-up Time
                      </th>
                      <th className="table-13e625a8-0b17-4798-9994-30cd0ae55e10-column-600 px-4 py-3 text-left text-white w-60 text-sm font-medium leading-normal">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-t-[#4d4d4d]">
                      <td className="table-13e625a8-0b17-4798-9994-30cd0ae55e10-column-120 h-[72px] px-4 py-2 w-[400px] text-white text-sm font-normal leading-normal">
                        Fresh Produce
                      </td>
                      <td className="table-13e625a8-0b17-4798-9994-30cd0ae55e10-column-240 h-[72px] px-4 py-2 w-[400px] text-[#adadad] text-sm font-normal leading-normal">5 lbs</td>
                      <td className="table-13e625a8-0b17-4798-9994-30cd0ae55e10-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#363636] text-white text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Available</span>
                        </button>
                      </td>
                      <td className="table-13e625a8-0b17-4798-9994-30cd0ae55e10-column-480 h-[72px] px-4 py-2 w-[400px] text-[#adadad] text-sm font-normal leading-normal">
                        Tomorrow, 10 AM - 12 PM
                      </td>
                      <td className="table-13e625a8-0b17-4798-9994-30cd0ae55e10-column-600 h-[72px] px-4 py-2 w-60 text-[#adadad] text-sm font-bold leading-normal tracking-[0.015em]">
                        Edit | Cancel
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#4d4d4d]">
                      <td className="table-13e625a8-0b17-4798-9994-30cd0ae55e10-column-120 h-[72px] px-4 py-2 w-[400px] text-white text-sm font-normal leading-normal">Canned Goods</td>
                      <td className="table-13e625a8-0b17-4798-9994-30cd0ae55e10-column-240 h-[72px] px-4 py-2 w-[400px] text-[#adadad] text-sm font-normal leading-normal">10 cans</td>
                      <td className="table-13e625a8-0b17-4798-9994-30cd0ae55e10-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#363636] text-white text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Picked Up</span>
                        </button>
                      </td>
                      <td className="table-13e625a8-0b17-4798-9994-30cd0ae55e10-column-480 h-[72px] px-4 py-2 w-[400px] text-[#adadad] text-sm font-normal leading-normal">
                        Today, 2 PM - 4 PM
                      </td>
                      <td
                        className="table-13e625a8-0b17-4798-9994-30cd0ae55e10-column-600 h-[72px] px-4 py-2 w-60 text-[#adadad] text-sm font-bold leading-normal tracking-[0.015em]"
                      ></td>
                    </tr>
                    <tr className="border-t border-t-[#4d4d4d]">
                      <td className="table-13e625a8-0b17-4798-9994-30cd0ae55e10-column-120 h-[72px] px-4 py-2 w-[400px] text-white text-sm font-normal leading-normal">Bakery Items</td>
                      <td className="table-13e625a8-0b17-4798-9994-30cd0ae55e10-column-240 h-[72px] px-4 py-2 w-[400px] text-[#adadad] text-sm font-normal leading-normal">2 loaves</td>
                      <td className="table-13e625a8-0b17-4798-9994-30cd0ae55e10-column-360 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#363636] text-white text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Available</span>
                        </button>
                      </td>
                      <td className="table-13e625a8-0b17-4798-9994-30cd0ae55e10-column-480 h-[72px] px-4 py-2 w-[400px] text-[#adadad] text-sm font-normal leading-normal">
                        Next Week, 9 AM - 11 AM
                      </td>
                      <td className="table-13e625a8-0b17-4798-9994-30cd0ae55e10-column-600 h-[72px] px-4 py-2 w-60 text-[#adadad] text-sm font-bold leading-normal tracking-[0.015em]">
                        Edit | Cancel
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* The style block needs to be handled outside the React component or dynamically */}
              {/* <style>
                @container(max-width:120px){.table-13e625a8-0b17-4798-9994-30cd0ae55e10-column-120{display: none;}}
                @container(max-width:240px){.table-13e625a8-0b17-4798-9994-30cd0ae55e10-column-240{display: none;}}
                @container(max-width:360px){.table-13e625a8-0b17-4798-9994-30cd0ae55e10-column-360{display: none;}}
                @container(max-width:480px){.table-13e625a8-0b17-4798-9994-30cd0ae55e10-column-480{display: none;}}
                @container(max-width:600px){.table-13e625a8-0b17-4798-9994-30cd0ae55e10-column-600{display: none;}}
              </style> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyDonationPage;