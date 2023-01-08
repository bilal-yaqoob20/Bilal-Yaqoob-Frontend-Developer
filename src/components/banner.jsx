import { useState } from "react";

export const Banner = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div class="flex justify-between px-8 py-4 border-b-2 ">
        <div>
          <img height="70px" width="70px" src="logo.png" alt="logo" />
        </div>

        <div class="self-center">
          <button
            id="dropdownInformationButton"
            class="text-white bg-black hover:bg-slate-800 focus:outline-none rounded-lg px-4 py-2.5 text-center inline-flex items-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
            type="button"
            onClick={() => setOpen((op) => !op)}
          >
            User's Name
            <svg
              class="w-4 h-4 ml-2"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>

          <div
            style={{ width: "147px" }}
            id="dropdownInformation"
            class={`z-10 ${
              open ? "" : "hidden"
            } bg-white absolute divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}
          >
            <div class="py-1">
              <span class="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                Setting
              </span>
            </div>
            <div class="py-1">
              <span class="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                Sign out
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "url(bgimage.jpg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div class="py-10 px-16 max-w-3xl m-auto text-center">
          <p class="text-white text-4xl">Lorem ipsum dolor sit amet</p>
          <p class="mt-4 text-white text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur
          </p>
          <p class="mt-8 text-white text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
      </div>
    </>
  );
};
