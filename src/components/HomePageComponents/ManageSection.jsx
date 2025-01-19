import React from "react";

function ManageSection() {
  return (
    <div>
      <div>
        <section className="backdrop-blur-xl text-white min-h-screen flex flex-col mt-12 pt-12 items-center justify-center px-6 text-center">
          {/* Logo */}
          <div className="flex justify-center items-center">
            <div className="h-[0.08rem] w-80 bg-gradient-to-r from-[#36adbf] to-[#50cea4]"></div>
            <span className="text-xl font-semibold px-4 text-transparent bg-clip-text bg-gradient-to-r from-[#36adbf] to-[#50cea4]">
              MANAGE
            </span>

            <div className="h-[0.08rem] w-80 bg-gradient-to-r from-[#36adbf] to-[#50cea4]"></div>
          </div>
          {/* Headline */}
          <div className="flex flex-col justify-center items-center w-[65%] leading-12">
            <h1 className="text-5xl text-black mt-8 font-bold">
              All Your Video Marketing,{" "}
              <span className="font-semibold">Simplified</span>
            </h1>
            <p className="mt-4 text-gray-300">
              With Whatmore, managing your videos, tracking performance, and
              launching omnichannel campaigns has never been easier. Everything
              you need—from creation to analytics—is under one roof, so you can
              get started fast and grow even faster!
            </p>
          </div>
          {/* Buttons */}

          <div>
            <button className="border bg-white text-black border-gray-400 px-6 py-2 rounded-lg flex flex-row justify-center items-center">
              <span className="pr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="24"
                  viewBox="0 0 21 24"
                  fill="none"
                >
                  {" "}
                  <path
                    d="M18.017 5.05626C18.0012 4.94195 17.9011 4.87869 17.8183 4.87172C17.2081 4.82587 16.5979 4.78038 15.9876 4.73526C15.9876 4.73526 14.7735 3.52994 14.6403 3.39653C14.5069 3.26319 14.2465 3.30375 14.1454 3.3335C14.1306 3.33788 13.8802 3.41516 13.466 3.54332C13.0605 2.37629 12.3447 1.30383 11.0855 1.30383C11.0508 1.30383 11.015 1.30524 10.9792 1.30728C10.6211 0.833684 10.1775 0.62793 9.79431 0.62793C6.86107 0.62793 5.4597 4.29478 5.02032 6.15815C3.88053 6.51133 3.07083 6.76242 2.9674 6.79491C2.33119 6.99448 2.31107 7.01452 2.22753 7.61401C2.16466 8.06787 0.5 20.9415 0.5 20.9415L13.4714 23.3719L20.4998 21.8514C20.4998 21.8514 18.0325 5.17057 18.017 5.05626ZM12.7491 3.76505L11.6515 4.10476C11.6519 4.02741 11.6523 3.95131 11.6523 3.86808C11.6523 3.14278 11.5516 2.55879 11.3901 2.09584C12.0389 2.17727 12.471 2.91549 12.7491 3.76505ZM10.5852 2.23967C10.7656 2.69165 10.8829 3.34031 10.8829 4.21563C10.8829 4.26041 10.8825 4.30136 10.8821 4.34277C10.1683 4.56387 9.39267 4.80392 8.6153 5.04475C9.05178 3.3602 9.86995 2.54658 10.5852 2.23967ZM9.71375 1.4147C9.84035 1.4147 9.96789 1.45768 10.0899 1.54169C9.14988 1.98404 8.14225 3.09815 7.71673 5.323L5.92492 5.87794C6.42333 4.18094 7.60689 1.4147 9.71375 1.4147Z"
                    fill="#95BF46"
                  ></path>{" "}
                  <path
                    d="M17.8189 4.87179C17.2087 4.82593 16.5985 4.78045 15.9882 4.73532C15.9882 4.73532 14.7741 3.53 14.6409 3.39659C14.591 3.34695 14.5237 3.32151 14.4534 3.31055L13.4727 23.3718L20.5004 21.8515C20.5004 21.8515 18.0331 5.17063 18.0176 5.05632C18.0018 4.94202 17.9017 4.87876 17.8189 4.87179Z"
                    fill="#5E8E3E"
                  ></path>{" "}
                  <path
                    d="M11.0861 8.75467L10.2195 11.3325C10.2195 11.3325 9.46022 10.9273 8.52947 10.9273C7.16498 10.9273 7.09632 11.7836 7.09632 11.9994C7.09632 13.1767 10.1654 13.6279 10.1654 16.3857C10.1654 18.5554 8.78925 19.9525 6.9337 19.9525C4.70705 19.9525 3.56836 18.5667 3.56836 18.5667L4.16456 16.5969C4.16456 16.5969 5.33504 17.6018 6.32271 17.6018C6.96807 17.6018 7.23059 17.0937 7.23059 16.7224C7.23059 15.1866 4.71269 15.1181 4.71269 12.5945C4.71269 10.4705 6.23721 8.41504 9.31459 8.41504C10.5003 8.41504 11.0861 8.75467 11.0861 8.75467Z"
                    fill="white"
                  ></path>{" "}
                </svg>
              </span>
              Install Shopify app
            </button>
            <p className="mt-4 flex justify-center items-center text-xs font-semibold text-black">
              Rated 5.0
              <span className="p-1">
                <svg
                  width="98"
                  height="14"
                  viewBox="0 0 101 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <path
                    d="M9.55168 0.350692L11.4313 4.6379C11.5752 4.96607 11.8866 5.19091 12.2441 5.22303L16.8232 5.63359C17.3413 5.709 17.548 6.3444 17.1723 6.71028L13.723 9.60799C13.4437 9.8426 13.3166 10.2113 13.3934 10.5674L14.3961 15.261C14.4841 15.7763 13.9436 16.1701 13.48 15.9257L9.48325 13.5852C9.17603 13.405 8.79618 13.405 8.48896 13.5852L4.49222 15.9243C4.02998 16.1673 3.48814 15.7749 3.57612 15.2596L4.5788 10.566C4.65421 10.2099 4.52852 9.8412 4.24923 9.60659L0.798515 6.71168C0.424257 6.3472 0.630936 5.7104 1.14764 5.63499L5.72671 5.22442C6.08421 5.1923 6.39562 4.96747 6.53946 4.6393L8.41913 0.352089C8.65234 -0.11713 9.31986 -0.11713 9.55168 0.350692Z"
                    fill="#FFA970"
                  ></path>{" "}
                  <path
                    d="M9.41493 4.89523L9.09653 1.73639C9.08396 1.56043 9.04765 1.25879 9.32974 1.25879C9.55318 1.25879 9.67468 1.72382 9.67468 1.72382L10.6299 4.25983C10.9902 5.22481 10.8421 5.55577 10.4944 5.75128C10.095 5.97472 9.5057 5.80016 9.41493 4.89523Z"
                    fill="white"
                  ></path>{" "}
                  <path
                    d="M13.3532 9.32761L16.0931 7.18959C16.2286 7.07647 16.4729 6.89633 16.2774 6.69104C16.1224 6.52905 15.7035 6.76226 15.7035 6.76226L13.3057 7.69931C12.5907 7.94648 12.1159 8.31236 12.074 8.7732C12.0196 9.38766 12.5712 9.86106 13.3532 9.32761Z"
                    fill="#FAFAFA"
                  ></path>{" "}
                  <path
                    d="M30.3095 0.350692L32.1892 4.6379C32.333 4.96607 32.6444 5.19091 33.0019 5.22303L37.581 5.63359C38.0991 5.709 38.3058 6.3444 37.9301 6.71028L34.4808 9.60799C34.2015 9.8426 34.0744 10.2113 34.1512 10.5674L35.1539 15.261C35.2419 15.7763 34.7014 16.1701 34.2378 15.9257L30.2411 13.5852C29.9338 13.405 29.554 13.405 29.2468 13.5852L25.25 15.9243C24.7878 16.1673 24.246 15.7749 24.3339 15.2596L25.3366 10.566C25.412 10.2099 25.2863 9.8412 25.007 9.60659L21.5563 6.71168C21.1821 6.3472 21.3887 5.7104 21.9054 5.63499L26.4845 5.22442C26.842 5.1923 27.1534 4.96747 27.2973 4.6393L29.1769 0.352089C29.4102 -0.11713 30.0777 -0.11713 30.3095 0.350692Z"
                    fill="#FFA970"
                  ></path>{" "}
                  <path
                    d="M30.1727 4.89523L29.8543 1.73639C29.8418 1.56043 29.8055 1.25879 30.0876 1.25879C30.311 1.25879 30.4325 1.72382 30.4325 1.72382L31.3877 4.25983C31.748 5.22481 31.5999 5.55577 31.2522 5.75128C30.8528 5.97472 30.2635 5.80016 30.1727 4.89523Z"
                    fill="white"
                  ></path>{" "}
                  <path
                    d="M34.111 9.32761L36.8509 7.18959C36.9864 7.07647 37.2308 6.89633 37.0352 6.69104C36.8802 6.52905 36.4613 6.76226 36.4613 6.76226L34.0635 7.69931C33.3485 7.94648 32.8737 8.31236 32.8318 8.7732C32.7774 9.38766 33.329 9.86106 34.111 9.32761Z"
                    fill="#FAFAFA"
                  ></path>{" "}
                  <path
                    d="M51.0654 0.350692L52.945 4.6379C53.0889 4.96607 53.4003 5.19091 53.7578 5.22303L58.3368 5.63359C58.8549 5.709 59.0616 6.3444 58.686 6.71028L55.2367 9.60799C54.9574 9.8426 54.8303 10.2113 54.9071 10.5674L55.9098 15.261C55.9977 15.7763 55.4573 16.1701 54.9937 15.9257L50.9969 13.5852C50.6897 13.405 50.3099 13.405 50.0026 13.5852L46.0059 15.9243C45.5437 16.1673 45.0018 15.7749 45.0898 15.2596L46.0925 10.566C46.1679 10.2099 46.0422 9.8412 45.7629 9.60659L42.3122 6.71168C41.9379 6.3472 42.1446 5.7104 42.6613 5.63499L47.2404 5.22442C47.5979 5.1923 47.9093 4.96747 48.0531 4.6393L49.9328 0.352089C50.166 -0.11713 50.8335 -0.11713 51.0654 0.350692Z"
                    fill="#FFA970"
                  ></path>{" "}
                  <path
                    d="M50.9286 4.89523L50.6102 1.73639C50.5976 1.56043 50.5613 1.25879 50.8434 1.25879C51.0669 1.25879 51.1883 1.72382 51.1883 1.72382L52.1435 4.25983C52.5038 5.22481 52.3558 5.55577 52.0081 5.75128C51.6087 5.97472 51.0194 5.80016 50.9286 4.89523Z"
                    fill="white"
                  ></path>{" "}
                  <path
                    d="M54.8688 9.32761L57.6087 7.18959C57.7442 7.07647 57.9886 6.89633 57.7931 6.69104C57.6381 6.52905 57.2191 6.76226 57.2191 6.76226L54.8213 7.69931C54.1063 7.94648 53.6315 8.31236 53.5896 8.7732C53.5352 9.38766 54.0868 9.86106 54.8688 9.32761Z"
                    fill="#FAFAFA"
                  ></path>{" "}
                  <path
                    d="M71.8232 0.350692L73.7028 4.6379C73.8467 4.96607 74.1581 5.19091 74.5156 5.22303L79.0947 5.63359C79.6128 5.709 79.8194 6.3444 79.4438 6.71028L75.9945 9.60799C75.7152 9.8426 75.5881 10.2113 75.6649 10.5674L76.6676 15.261C76.7555 15.7763 76.2151 16.1701 75.7515 15.9257L71.7547 13.5852C71.4475 13.405 71.0677 13.405 70.7604 13.5852L66.7637 15.9243C66.3015 16.1673 65.7596 15.7749 65.8476 15.2596L66.8503 10.566C66.9257 10.2099 66.8 9.8412 66.5207 9.60659L63.07 6.71168C62.6957 6.3472 62.9024 5.7104 63.4191 5.63499L67.9982 5.22442C68.3557 5.1923 68.6671 4.96747 68.8109 4.6393L70.6906 0.352089C70.9238 -0.11713 71.5913 -0.11713 71.8232 0.350692Z"
                    fill="#FFA970"
                  ></path>{" "}
                  <path
                    d="M71.6864 4.89523L71.368 1.73639C71.3554 1.56043 71.3191 1.25879 71.6012 1.25879C71.8247 1.25879 71.9462 1.72382 71.9462 1.72382L72.9014 4.25983C73.2616 5.22481 73.1136 5.55577 72.7659 5.75128C72.3665 5.97472 71.7772 5.80016 71.6864 4.89523Z"
                    fill="white"
                  ></path>{" "}
                  <path
                    d="M75.6266 9.32761L78.3665 7.18959C78.502 7.07647 78.7464 6.89633 78.5509 6.69104C78.3959 6.52905 77.9769 6.76226 77.9769 6.76226L75.5792 7.69931C74.8642 7.94648 74.3893 8.31236 74.3475 8.7732C74.293 9.38766 74.8446 9.86106 75.6266 9.32761Z"
                    fill="#FAFAFA"
                  ></path>{" "}
                  <path
                    d="M92.579 0.350692L94.4587 4.6379C94.6025 4.96607 94.9139 5.19091 95.2714 5.22303L99.8505 5.63359C100.369 5.709 100.575 6.3444 100.2 6.71028L96.7503 9.60799C96.471 9.8426 96.3439 10.2113 96.4208 10.5674L97.4234 15.261C97.5114 15.7763 96.971 16.1701 96.5073 15.9257L92.5106 13.5852C92.2034 13.405 91.8235 13.405 91.5163 13.5852L87.5196 15.9243C87.0573 16.1673 86.5155 15.7749 86.6035 15.2596L87.6061 10.566C87.6816 10.2099 87.5559 9.8412 87.2766 9.60659L83.8259 6.71168C83.4516 6.3472 83.6583 5.7104 84.175 5.63499L88.7541 5.22442C89.1116 5.1923 89.423 4.96747 89.5668 4.6393L91.4465 0.352089C91.6797 -0.11713 92.3472 -0.11713 92.579 0.350692Z"
                    fill="#FFA970"
                  ></path>{" "}
                  <path
                    d="M92.4423 4.89523L92.1239 1.73639C92.1113 1.56043 92.075 1.25879 92.3571 1.25879C92.5805 1.25879 92.702 1.72382 92.702 1.72382L93.6572 4.25983C94.0175 5.22481 93.8695 5.55577 93.5218 5.75128C93.1224 5.97472 92.533 5.80016 92.4423 4.89523Z"
                    fill="white"
                  ></path>{" "}
                  <path
                    d="M96.3805 9.32761L99.1204 7.18959C99.2559 7.07647 99.5003 6.89633 99.3048 6.69104C99.1498 6.52905 98.7308 6.76226 98.7308 6.76226L96.3331 7.69931C95.6181 7.94648 95.1433 8.31236 95.1014 8.7732C95.0469 9.38766 95.5985 9.86106 96.3805 9.32761Z"
                    fill="#FAFAFA"
                  ></path>{" "}
                </svg>
              </span>
              on Shopify
              <span className="pl-1">
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <path
                    id="fill1"
                    d="M13.046 3.13987C13.035 3.05985 12.9649 3.01557 12.907 3.01069C12.4799 2.9786 12.0527 2.94675 11.6255 2.91517C11.6255 2.91517 10.7756 2.07144 10.6824 1.97806C10.589 1.88472 10.4067 1.91311 10.336 1.93394C10.3256 1.93701 10.1503 1.9911 9.86039 2.08082C9.5765 1.26389 9.07547 0.513171 8.19405 0.513171C8.16971 0.513171 8.14467 0.514158 8.11962 0.515583C7.86894 0.184067 7.55841 0.0400391 7.2902 0.0400391C5.23693 0.0400391 4.25597 2.60683 3.94841 3.9112C3.15055 4.15842 2.58376 4.33418 2.51136 4.35693C2.06602 4.49662 2.05193 4.51065 1.99345 4.9303C1.94945 5.248 0.78418 14.2595 0.78418 14.2595L9.86417 15.9608L14.784 14.8965C14.784 14.8965 13.0569 3.21988 13.046 3.13987ZM9.35854 2.23602L8.59023 2.47382C8.5905 2.41968 8.59078 2.36641 8.59078 2.30815C8.59078 1.80043 8.5203 1.39164 8.40724 1.06758C8.86141 1.12458 9.16388 1.64133 9.35854 2.23602ZM7.84384 1.16826C7.97011 1.48465 8.05221 1.93871 8.05221 2.55143C8.05221 2.58278 8.05194 2.61144 8.05166 2.64043C7.552 2.7952 7.00905 2.96323 6.46489 3.13181C6.77043 1.95263 7.34314 1.38309 7.84384 1.16826ZM7.2338 0.590775C7.32242 0.590775 7.4117 0.620863 7.49714 0.679669C6.8391 0.989318 6.13376 1.76919 5.83589 3.32659L4.58162 3.71505C4.93051 2.52715 5.759 0.590775 7.2338 0.590775Z"
                    fill="#95BF46"
                  ></path>{" "}
                  <path
                    id="fill2"
                    d="M12.9067 3.01084C12.4795 2.97874 12.0523 2.9469 11.6251 2.91531C11.6251 2.91531 10.7753 2.07159 10.682 1.9782C10.6471 1.94345 10.6 1.92564 10.5508 1.91797L9.86426 15.9608L14.7837 14.8966C14.7837 14.8966 13.0565 3.22003 13.0457 3.14001C13.0347 3.06 12.9646 3.01571 12.9067 3.01084Z"
                    fill="#5E8E3E"
                  ></path>{" "}
                  <path
                    d="M8.19408 5.72896L7.58744 7.53347C7.58744 7.53347 7.05594 7.2498 6.40442 7.2498C5.44928 7.2498 5.40121 7.8492 5.40121 8.00024C5.40121 8.8244 7.54957 9.14019 7.54957 11.0706C7.54957 12.5895 6.58626 13.5675 5.28738 13.5675C3.72873 13.5675 2.93164 12.5974 2.93164 12.5974L3.34898 11.2185C3.34898 11.2185 4.16832 11.9219 4.85968 11.9219C5.31144 11.9219 5.4952 11.5662 5.4952 11.3064C5.4952 10.2313 3.73267 10.1833 3.73267 8.41682C3.73267 6.93001 4.79984 5.49121 6.954 5.49121C7.78403 5.49121 8.19408 5.72896 8.19408 5.72896Z"
                    fill="white"
                  ></path>{" "}
                </svg>
              </span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ManageSection;
