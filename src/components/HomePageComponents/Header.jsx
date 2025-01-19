import { useState } from "react";
import InfiniteScrollingText from "./InfiniteScrollingText";
import ProductMenuPopUp from "./ProductMenuPopUp";
import ResourceMenuPopUp from "./ResourceMenuPopUp";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenProduct, setIsOpenProduct] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 justify-center items-center flex flex-col">
      {/* Announcement Bar */}

      <InfiniteScrollingText />

      {/* Navigation Bar */}
      <nav className="flex justify-between w-full items-center px-3 py-4 bg-white font-semibold">
        {/* Left Section - Logo */}
        <div className="flex w-[25%] pr-3 justify-end space-x-2">
          {/* Main Logo */}
          <svg
            className="lg-2"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
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
              strokeWidth="0.4"
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
              strokeWidth="0.4"
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
                <stop stopColor="#E1D8F3"></stop>{" "}
                <stop offset="0.658846" stopColor="#F5D6EC"></stop>{" "}
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
                <stop stopColor="#F2A6BA"></stop>{" "}
                <stop offset="1" stopColor="#FED5AE"></stop>{" "}
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
                <stop stopColor="#DA4188"></stop>{" "}
                <stop offset="1" stopColor="#F7504E"></stop>{" "}
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
                <stop stopColor="#CF83D7"></stop>{" "}
                <stop offset="1" stopColor="#F091A8"></stop>{" "}
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
                <stop stopColor="#969FDE"></stop>{" "}
                <stop offset="0.509" stopColor="#FCA19C"></stop>{" "}
                <stop offset="1" stopColor="#FFC499"></stop>{" "}
              </linearGradient>{" "}
            </defs>{" "}
          </svg>
          <span className="text-xl font-semibold hover:text-[#e75471] text-[#0b0a0a] leading-[26px] tracking-[-1.04px] transition-colors duration-200 ease-in-out">
            Whatmore
          </span>
        </div>

        {/* Middle Section - Navigation Links */}
        <ul className="flex w-[50%] justify-center space-x-3 gap-1 text-[#151414] text-xs font-small font-semibold leading-[22px]">
          <li className="relative">
            {/* Products */}
            <button
              className="transition px-2 py-1 border rounded-md border-gradient-primary-3 flex flex-row justify-center items-center text-center"
              onClick={() => setIsOpenProduct(!isOpenProduct)}
            >
              Products
              <span className="pl-1 pt-1">
                <svg
                  width="8"
                  height="7"
                  viewBox="0 0 9 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <path
                    className="path1"
                    d="M7.70078 1.39961L4.50078 4.59961L1.30078 1.39961"
                    fill="#151414"
                  ></path>{" "}
                  <path
                    className="path2"
                    d="M7.70078 1.39961L4.50078 4.59961L1.30078 1.39961L7.70078 1.39961Z"
                    stroke="#151414"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                      <stop stopColor="#CF9FF9"></stop>{" "}
                      <stop offset="0.5" stopColor="#FDA19B"></stop>{" "}
                      <stop offset="1" stopColor="#FFDAC2"></stop>{" "}
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
                      <stop stopColor="#CF9FF9"></stop>{" "}
                      <stop offset="0.5" stopColor="#FDA19B"></stop>{" "}
                      <stop offset="1" stopColor="#FFDAC2"></stop>{" "}
                    </linearGradient>{" "}
                  </defs>{" "}
                </svg>
              </span>
            </button>
            {isOpenProduct && <ProductMenuPopUp />}
          </li>

          <li className="relative">
            <button
              className="hover:bg-gray-200 hover:border rounded-lg p-1 flex justify-center items-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              Resources
              <span className="pl-1 pt-1">
                <svg
                  width="8"
                  height="7"
                  viewBox="0 0 9 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <path
                    className="path1"
                    d="M7.70078 1.39961L4.50078 4.59961L1.30078 1.39961"
                    fill="#151414"
                  ></path>{" "}
                  <path
                    className="path2"
                    d="M7.70078 1.39961L4.50078 4.59961L1.30078 1.39961L7.70078 1.39961Z"
                    stroke="#151414"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                      <stop stopColor="#CF9FF9"></stop>{" "}
                      <stop offset="0.5" stopColor="#FDA19B"></stop>{" "}
                      <stop offset="1" stopColor="#FFDAC2"></stop>{" "}
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
                      <stop stopColor="#CF9FF9"></stop>{" "}
                      <stop offset="0.5" stopColor="#FDA19B"></stop>{" "}
                      <stop offset="1" stopColor="#FFDAC2"></stop>{" "}
                    </linearGradient>{" "}
                  </defs>{" "}
                </svg>
              </span>
            </button>
            {isOpen && <ResourceMenuPopUp />}
          </li>

          <li className="pt-1">
            <a
              href="#"
              className="hover:bg-gray-200 hover:border rounded-lg p-1"
            >
              Customer Stories
            </a>
          </li>
          <li className="pt-1">
            <a
              href="#"
              className="hover:bg-gray-200 hover:border rounded-lg p-1"
            >
              Partners{" "}
              <span className="bg-gradient-primary-3 text-xs px-1 rounded-md">
                30%
              </span>
            </a>
          </li>
          <li className="pt-1">
            <a
              href="#"
              className="hover:bg-gray-200 hover:border rounded-lg p-1"
            >
              Pricing
            </a>
          </li>
        </ul>

        {/* Right Section - Buttons */}
        <div className="flex w-[30%] pl-0 justify-start space-x-4 text-xs">
          <button className="border-2 border-black px-2 py-2 rounded-lg flex items-center space-x-2 hover:bg-[#e75471] hover:text-white hover:border-[#e75471] text-sm">
            <span>
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  d="M13.2531 3.11526C13.242 3.03484 13.1716 2.99034 13.1133 2.98544C12.6841 2.95318 12.2548 2.92118 11.8255 2.88944C11.8255 2.88944 10.9714 2.04151 10.8776 1.94766C10.7838 1.85386 10.6006 1.88239 10.5295 1.90332C10.5191 1.90641 10.3429 1.96077 10.0516 2.05093C9.76626 1.22994 9.26273 0.475487 8.37692 0.475487C8.35246 0.475487 8.32729 0.476478 8.30212 0.47791C8.0502 0.144745 7.73812 0 7.46857 0C5.40508 0 4.41925 2.57957 4.11015 3.89042C3.30833 4.13888 2.73871 4.31551 2.66595 4.33837C2.21839 4.47876 2.20424 4.49286 2.14547 4.91459C2.10124 5.23388 0.930176 14.2903 0.930176 14.2903L10.0554 16L14.9997 14.9304C14.9997 14.9304 13.264 3.19567 13.2531 3.11526ZM9.54721 2.20691L8.77507 2.4459C8.77535 2.39148 8.77563 2.33794 8.77563 2.2794C8.77563 1.76916 8.7048 1.35833 8.59117 1.03265C9.0476 1.08994 9.35157 1.60926 9.54721 2.20691ZM8.02497 1.13383C8.15187 1.4518 8.23438 1.90812 8.23438 2.52389C8.23438 2.55539 8.2341 2.5842 8.23383 2.61333C7.73168 2.76887 7.18602 2.93774 6.63916 3.10716C6.94622 1.92211 7.52178 1.34974 8.02497 1.13383ZM7.4119 0.553477C7.50096 0.553477 7.59068 0.583715 7.67655 0.642813C7.01523 0.954003 6.30638 1.73776 6.00703 3.30291L4.74652 3.6933C5.09714 2.49949 5.92975 0.553477 7.4119 0.553477Z"
                  fill="#95BF46"
                ></path>{" "}
                <path
                  d="M13.1132 2.98503C12.6839 2.95277 12.2546 2.92077 11.8253 2.88903C11.8253 2.88903 10.9712 2.0411 10.8775 1.94725C10.8424 1.91233 10.7951 1.89443 10.7456 1.88672L10.0557 15.9995L14.9996 14.93C14.9996 14.93 13.2638 3.19526 13.2529 3.11484C13.2419 3.03443 13.1714 2.98993 13.1132 2.98503Z"
                  fill="#5E8E3E"
                ></path>{" "}
                <path
                  d="M8.37701 5.71549L7.76735 7.52898C7.76735 7.52898 7.23321 7.2439 6.57844 7.2439C5.61854 7.2439 5.57024 7.84629 5.57024 7.99808C5.57024 8.82634 7.72929 9.1437 7.72929 11.0838C7.72929 12.6101 6.76119 13.593 5.45584 13.593C3.88943 13.593 3.08838 12.6181 3.08838 12.6181L3.5078 11.2324C3.5078 11.2324 4.33121 11.9393 5.02602 11.9393C5.48002 11.9393 5.6647 11.5818 5.6647 11.3207C5.6647 10.2402 3.8934 10.1921 3.8934 8.41673C3.8934 6.92252 4.96587 5.47656 7.13076 5.47656C7.96491 5.47656 8.37701 5.71549 8.37701 5.71549Z"
                  fill="white"
                ></path>{" "}
              </svg>
            </span>{" "}
            <span className="text-xs ">Install for Free</span>
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-[#e75471] text-xs">
            Log In
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
