import React from "react";

const Header = () => {
  return (
    <div className="w-full h-16 flex text-white font-semibold text-sm ">
      <img src="/logo.png" alt="" className="w-18 h-14 mr-4 pl-6" />

      <div className="flex justify-end pl-[900px] mt-4 gap-8">
        <a href="#features" className="hover:text-gray-3">
          Home
        </a>
        <a href="#features" className="hover:text-gray-3">
          Services
        </a>
        <a href="#features" className="hover:text-gray-3">
          About
        </a>
        <div className="w-full h-40 flex items-center justify-center cursor-pointer pb-[140px]">
          <div className="relative inline-flex items-center justify-start py-2 pl-4 pr-14 overflow-hidden font-semibold shadow text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                className="w-5 h-5 text-green-400"
              >
                <path
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                className="w-5 h-5 text-green-400"
              >
                <path
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200">
              Login
            </span>
          </div>
          {/* search bar */}
          <div className="rounded-lg bg-gray-200 ml-4">
            <div className="flex">
              <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="pointer-events-none absolute w-5 fill-gray-500 transition"
                >
                  <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                </svg>
              </div>
              <input
                type="text"
                className="w-full max-w-[160px] bg-white pl-2 text-base font-semibold outline-0"
                placeholder=""
                id=""
              />
              <input
                type="button"
                value="Search"
                className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* search bar */}
        <div className="flex items-center justify-center pr-8 pb-[360px]"></div>
        {/* search bar */}
      </div>
    </div>
  );
};

export default Header;
