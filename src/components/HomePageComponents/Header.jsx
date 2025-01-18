import { useState } from "react";
import InfiniteScrollingText from "./InfiniteScrollingText";

const Header = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 justify-center items-center flex flex-col">
      {/* Announcement Bar */}

      <InfiniteScrollingText />

      {/* Navigation Bar */}
      <nav className="flex justify-between w-[90%] items-center px-8 py-4 bg-white font-semibold">
        {/* Left Section - Logo */}
        <div className="flex items-center space-x-2">
          {/* Main Logo */}
          <svg
            class="lg-2"
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
          >
            {" "}
            <path
              d="M17.0196 16.2994L6.86621 6.15235V1H27.1329V6.15688L17.0196 16.2994Z"
              fill="url(#paint0_linear_564_101)"
            ></path>{" "}
            <path
              d="M17.0196 17.7006L6.86621 27.8477V33H27.1329V27.8431L17.0196 17.7006Z"
              fill="url(#paint1_linear_564_101)"
            ></path>{" "}
            <path
              d="M6.86621 6.15235H6.66621V6.23523L6.72483 6.29381L6.86621 6.15235ZM17.0196 16.2994L16.8782 16.4408L17.0198 16.5824L17.1612 16.4406L17.0196 16.2994ZM6.86621 1V0.8H6.66621V1H6.86621ZM27.1329 1H27.3329V0.8H27.1329V1ZM27.1329 6.15688L27.2745 6.2981L27.3329 6.23955V6.15688H27.1329ZM6.86621 27.8477L6.72483 27.7062L6.66621 27.7648V27.8477H6.86621ZM17.0196 17.7006L17.1612 17.5594L17.0198 17.4176L16.8782 17.5592L17.0196 17.7006ZM6.86621 33H6.66621V33.2H6.86621V33ZM27.1329 33V33.2H27.3329V33H27.1329ZM27.1329 27.8431H27.3329V27.7604L27.2745 27.7019L27.1329 27.8431ZM9.53275 1.2H24.4661V0.8H9.53275V1.2ZM24.4661 32.7801H9.53275V33.1801H24.4661V32.7801ZM6.72483 6.29381L16.8782 16.4408L17.1609 16.1579L7.00759 6.01088L6.72483 6.29381ZM6.66621 1V6.15235H7.06621V1H6.66621ZM27.1329 0.8H6.86621V1.2H27.1329V0.8ZM27.3329 6.15688V1H26.9329V6.15688H27.3329ZM26.9913 6.01566L16.8779 16.1582L17.1612 16.4406L27.2745 6.2981L26.9913 6.01566ZM7.00759 27.9891L17.1609 17.8421L16.8782 17.5592L6.72483 27.7062L7.00759 27.9891ZM7.06621 33V27.8477H6.66621V33H7.06621ZM27.1329 32.8H6.86621V33.2H27.1329V32.8ZM26.9329 27.8431V33H27.3329V27.8431H26.9329ZM27.2745 27.7019L17.1612 17.5594L16.8779 17.8418L26.9913 27.9843L27.2745 27.7019Z"
              fill="white"
            ></path>{" "}
            <path
              d="M6.86621 26.3667L6.86621 7.53394L16.2884 16.9503L6.86621 26.3667Z"
              fill="url(#paint2_linear_564_101)"
              stroke="#FFFEFF"
              stroke-width="0.4"
            ></path>{" "}
            <path
              d="M33 24.4258V9.50171L33 6.3037C33 3.5399 30.8951 1.26742 28.2 1V32.9275C30.8951 32.66 33 30.3876 33 27.6238L33 24.4258Z"
              fill="#D9D9D9"
            ></path>{" "}
            <path
              d="M1 9.50171V24.4258V27.6238C1 30.3876 3.1049 32.66 5.8 32.9275V1C3.10489 1.26742 1 3.5399 1 6.3037V9.50171Z"
              fill="#D9D9D9"
            ></path>{" "}
            <path
              d="M33.0002 27.6238V6.3037C33.0002 3.5399 30.8953 1.26742 28.2002 1V32.9275C30.8953 32.66 33.0002 30.3876 33.0002 27.6238Z"
              fill="url(#paint3_linear_564_101)"
            ></path>{" "}
            <path
              d="M33.0002 24.4258V9.50171M33.0002 27.6238V6.3037C33.0002 3.5399 30.8953 1.26742 28.2002 1V32.9275C30.8953 32.66 33.0002 30.3876 33.0002 27.6238Z"
              stroke="white"
              stroke-width="0.4"
            ></path>{" "}
            <path
              d="M1 9.50171V24.4258V27.6238C1 30.3876 3.1049 32.66 5.8 32.9275V1C3.10489 1.26742 1 3.5399 1 6.3037V9.50171Z"
              fill="url(#paint4_linear_564_101)"
            ></path>{" "}
            <path
              d="M5.8 1H6V0.779173L5.78025 0.800977L5.8 1ZM5.8 32.9275L5.78025 33.1265L6 33.1483V32.9275H5.8ZM1.2 24.4258V9.50171H0.8V24.4258H1.2ZM1.2 27.6238V24.4258H0.8V27.6238H1.2ZM1.2 9.50171V6.3037H0.8V9.50171H1.2ZM5.78025 0.800977C2.98396 1.07844 0.8 3.43597 0.8 6.3037H1.2C1.2 3.64383 3.22583 1.4564 5.81975 1.19902L5.78025 0.800977ZM5.81975 32.7284C3.22583 32.4711 1.2 30.2836 1.2 27.6238H0.8C0.8 30.4915 2.98396 32.849 5.78025 33.1265L5.81975 32.7284ZM5.6 1V32.9275H6V1H5.6Z"
              fill="white"
            ></path>{" "}
            <defs>
              {" "}
              <linearGradient
                id="paint0_linear_564_101"
                x1="7"
                y1="1"
                x2="22.5"
                y2="11"
                gradientUnits="userSpaceOnUse"
              >
                {" "}
                <stop stop-color="#E1D8F3"></stop>{" "}
                <stop offset="0.658846" stop-color="#F5D6EC"></stop>{" "}
              </linearGradient>{" "}
              <linearGradient
                id="paint1_linear_564_101"
                x1="23.5"
                y1="25"
                x2="3"
                y2="31.2"
                gradientUnits="userSpaceOnUse"
              >
                {" "}
                <stop stop-color="#F2A6BA"></stop>{" "}
                <stop offset="1" stop-color="#FED5AE"></stop>{" "}
              </linearGradient>{" "}
              <linearGradient
                id="paint2_linear_564_101"
                x1="11.5773"
                y1="7.53394"
                x2="11.5773"
                y2="26.3667"
                gradientUnits="userSpaceOnUse"
              >
                {" "}
                <stop stop-color="#DA4188"></stop>{" "}
                <stop offset="1" stop-color="#F7504E"></stop>{" "}
              </linearGradient>{" "}
              <linearGradient
                id="paint3_linear_564_101"
                x1="30.6002"
                y1="1"
                x2="30.6002"
                y2="32.9275"
                gradientUnits="userSpaceOnUse"
              >
                {" "}
                <stop stop-color="#CF83D7"></stop>{" "}
                <stop offset="1" stop-color="#F091A8"></stop>{" "}
              </linearGradient>{" "}
              <linearGradient
                id="paint4_linear_564_101"
                x1="3.4"
                y1="1"
                x2="3.4"
                y2="32.9275"
                gradientUnits="userSpaceOnUse"
              >
                {" "}
                <stop stop-color="#969FDE"></stop>{" "}
                <stop offset="0.509" stop-color="#FCA19C"></stop>{" "}
                <stop offset="1" stop-color="#FFC499"></stop>{" "}
              </linearGradient>{" "}
            </defs>{" "}
          </svg>
          <span className="text-xl font-semibold hover:text-[#e75471] text-[#0b0a0a] text-[26px] leading-[26px] tracking-[-1.04px] transition-colors duration-200 ease-in-out">
            Whatmore
          </span>
        </div>

        {/* Middle Section - Navigation Links */}
        <ul className="flex items-center space-x-6 gap-2 text-[#151414] text-xs font-small font-semibold leading-[22px]">
          <li className="relative">
            {/* Products */}
            <button
              className="transition p-1 border rounded-md border-gradient-primary-3 flex flex-row justify-center items-center text-center"
              //   onMouseEnter={() => setIsProductsOpen(true)}
              //   onMouseLeave={() => setIsProductsOpen(false)}
            >
              Products
              <span>
                <svg
                  width="9"
                  height="6"
                  viewBox="0 0 9 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <path
                    class="path1"
                    d="M7.70078 1.39961L4.50078 4.59961L1.30078 1.39961"
                    fill="#151414"
                  ></path>{" "}
                  <path
                    class="path2"
                    d="M7.70078 1.39961L4.50078 4.59961L1.30078 1.39961L7.70078 1.39961Z"
                    stroke="#151414"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <defs>
                    {" "}
                    <linearGradient
                      id="paint00"
                      x1="1.30078"
                      y1="4.59961"
                      x2="3.86078"
                      y2="-0.520391"
                      gradientUnits="userSpaceOnUse"
                    >
                      {" "}
                      <stop stop-color="#CF9FF9"></stop>{" "}
                      <stop offset="0.5" stop-color="#FDA19B"></stop>{" "}
                      <stop offset="1" stop-color="#FFDAC2"></stop>{" "}
                    </linearGradient>{" "}
                    <linearGradient
                      id="paint11"
                      x1="1.30078"
                      y1="4.59961"
                      x2="3.86078"
                      y2="-0.520391"
                      gradientUnits="userSpaceOnUse"
                    >
                      {" "}
                      <stop stop-color="#CF9FF9"></stop>{" "}
                      <stop offset="0.5" stop-color="#FDA19B"></stop>{" "}
                      <stop offset="1" stop-color="#FFDAC2"></stop>{" "}
                    </linearGradient>{" "}
                  </defs>{" "}
                </svg>
              </span>
            </button>
            {isProductsOpen && (
              <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-2">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Product 1
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Product 2
                </a>
              </div>
            )}
          </li>

          <li className="relative">
            <button
              className="hover:bg-gray-200 hover:border rounded-lg p-1"
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              Resources ▼
            </button>
            {isResourcesOpen && (
              <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-2">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Blog
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Guides
                </a>
              </div>
            )}
          </li>

          <li>
            <a
              href="#"
              className="hover:bg-gray-200 hover:border rounded-lg p-1"
            >
              Customer Stories
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:bg-gray-200 hover:border rounded-lg p-1"
            >
              Partners{" "}
              <span className="bg-gradient-primary-3 text-xs px-2 py-1 rounded-lg">
                30%
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:bg-gray-200 hover:border rounded-lg p-1"
            >
              Pricing
            </a>
          </li>
        </ul>

        {/* Right Section - Buttons */}
        <div className="flex items-center space-x-4">
          <button className="border border-black px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-100  text-sm">
            {/* <img src="/shopify-icon.png" alt="Shopify" className="w-5" /> */}
            <span>Install for Free</span>
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
            Log In
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
