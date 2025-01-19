import React from "react";

const BlackSection = () => {
  return (
    <section className="bg-black backdrop-blur-xl text-white min-h-screen flex flex-col mt-12 pt-12 items-center justify-center px-6 text-center">
      {/* Logo */}
      <div className="flex justify-center items-center">
        <div className="h-[0.08rem] w-80 bg-gradient-to-r from-pink-200 to-purple-200"></div>
        <span className="text-xl font-semibold px-4 text-transparent bg-clip-text bg-gradient-to-r from-[#ee7b9d] to-purple-300">
          CREATE
        </span>

        <div className="h-[0.08rem] w-80 bg-gradient-to-r from-pink-400 to-purple-400"></div>
      </div>
      {/* Headline */}
      <div className="flex flex-col justify-center items-center w-[65%] leading-12">
        <h1 className="text-5xl font-bold mt-8">
          Generate marketing videos{" "}
          <span className="font-semibold">in a few clicks with</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ef7fa1] to-purple-300">
            Studio
          </span>
        </h1>
        <p className="mt-4 text-gray-300">
          Whatmore fetches all product and brand details and auto-creates
          product or promotional videos that can be launched in minutes. Minimal
          effort, high ROAS!
        </p>
      </div>

      {/* Search Bar & CTA */}
      <div className="mt-6 flex items-center shadow-lg bg-white p-1 rounded-full w-full max-w-lg">
        <input
          type="text"
          placeholder="Paste your product link here"
          className="flex-1 px-4 py-1 text-black outline-none rounded-l-full"
        />
        <button className="bg-gradient-to-r  flex items-center justify-center from-[#ef7fa1] to-purple-300 text-white px-6 py-1 rounded-full font-bold shadow-md">
          <span className="pr-2">
            <svg
              width="17"
              height="16"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.39619 17.6379L5.19145 18L5.55586 13.8217L14.3017 5.18651C14.4323 5.05385 14.5881 4.94845 14.7602 4.87649C14.9323 4.80453 15.1172 4.76746 15.3039 4.76746C15.4906 4.76746 15.6754 4.80453 15.8475 4.87649C16.0196 4.94845 16.1755 5.05385 16.306 5.18651L18.086 6.96926C18.2172 7.09883 18.3213 7.2529 18.3924 7.42261C18.4634 7.59232 18.5 7.77431 18.5 7.95812C18.5 8.14193 18.4634 8.32393 18.3924 8.49364C18.3213 8.66335 18.2172 8.81742 18.086 8.94699L9.39619 17.6379ZM0.868967 4.78261C0.377011 4.69765 0.377011 3.99569 0.868967 3.91073C1.74003 3.76008 2.54621 3.35508 3.18473 2.74736C3.82326 2.13964 4.2652 1.35673 4.45421 0.498443L4.48365 0.363344C4.59017 -0.118555 5.28255 -0.122733 5.39468 0.360558L5.42972 0.516549C5.62566 1.37101 6.07129 2.1489 6.71065 2.75253C7.35001 3.35615 8.1546 3.7586 9.02337 3.90934C9.51813 3.9929 9.51813 4.69904 9.02337 4.78539C8.15453 4.93578 7.34977 5.33791 6.71016 5.94129C6.07054 6.54467 5.6246 7.32239 5.42831 8.17679L5.39187 8.33417C5.28115 8.81607 4.58877 8.81328 4.48225 8.32999L4.45421 8.19489C4.26501 7.33623 3.82265 6.55305 3.18359 5.94529C2.54452 5.33753 1.73773 4.93275 0.866163 4.78261H0.868967Z"
                fill="#151414"
              ></path>
            </svg>
          </span>
          <span className="text-black text-sm font-semibold p-1">
            {" "}
            Start for <span className="font-bold">FREE</span>
          </span>
        </button>
      </div>

      {/*Logo Section */}
      <section className="">
        <span className="flex justify-center items-center pt-4 underline">
          <a href="#" className="pr-2 flex justify-center items-center">
            {" "}
            Try demo links
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                {" "}
                <path
                  d="M5.24323 5.59115C5.24323 6.04948 5.61823 6.42448 6.07656 6.42448H12.4016L5.00156 13.8245C4.67656 14.1495 4.67656 14.6745 5.00156 14.9995C5.32656 15.3245 5.85156 15.3245 6.17656 14.9995L13.5766 7.59948V13.9245C13.5766 14.3828 13.9516 14.7578 14.4099 14.7578C14.8682 14.7578 15.2432 14.3828 15.2432 13.9245V5.59115C15.2432 5.13281 14.8682 4.75781 14.4099 4.75781H6.07656C5.61823 4.75781 5.24323 5.13281 5.24323 5.59115Z"
                  fill="#FC739C"
                ></path>{" "}
              </svg>
            </span>
          </a>
        </span>

        <div className="logos-cont flex p-2 m-2 ">
          <a
            href="https://shopify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4"
          >
            <img
              src="https://d1rem61pdixo0z.cloudfront.net/website-cdn/public/img/logos/shopify.svg"
              alt="Shopify"
            />
          </a>
          <a
            href="https://amazon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4"
          >
            <img
              src="https://d1rem61pdixo0z.cloudfront.net/website-cdn/public/img/logos/amazon.svg"
              alt="Amazon"
            />
          </a>
          <a
            href="https://myntra.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4"
          >
            <img
              src="https://d1rem61pdixo0z.cloudfront.net/website-cdn/public/img/logos/myntra.svg"
              alt="Myntra"
            />
          </a>
          <a
            href="https://flipkart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4"
          >
            <img
              src="https://d1rem61pdixo0z.cloudfront.net/website-cdn/public/img/logos/flipkart.svg"
              alt="Flipkart"
            />
          </a>
          <a href="https://etsy.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://d1rem61pdixo0z.cloudfront.net/website-cdn/public/img/logos/etsy.svg"
              alt="Etsy"
              className="px-4"
            />
          </a>
          <a
            href="https://walmart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4"
          >
            <img
              src="https://d1rem61pdixo0z.cloudfront.net/website-cdn/public/img/logos/walmart.svg"
              alt="Walmart"
            />
          </a>
          <a
            href="https://lazada.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4"
          >
            <img
              src="https://d1rem61pdixo0z.cloudfront.net/website-cdn/public/img/logos/lazada.svg"
              alt="Lazada"
            />
          </a>
          <a
            href="https://zazzle.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4"
          >
            <img
              src="https://d1rem61pdixo0z.cloudfront.net/website-cdn/public/img/logos/zazzel.svg"
              alt="Zazzel"
            />
          </a>
        </div>
      </section>

      {/* Social & E-Commerce Icons */}

      <div className="create-images-cont flex flex-row p-5 gap-4">
        <img
          src="https://d1rem61pdixo0z.cloudfront.net/website-cdn/public/img/home/static/create-1.webp"
          data-image-component="true"
          alt="For marketers, dropshippers, brands and designers"
          title="For marketers, dropshippers, brands and designers"
          width="440"
          height="250"
          loading="lazy"
          decoding="async"
          className="img-1"
        />{" "}
        <img
          src="https://d1rem61pdixo0z.cloudfront.net/website-cdn/public/img/home/static/create-2.webp"
          data-image-component="true"
          alt="6x engagement, 12x ROAS"
          title="6x engagement, 12x ROAS"
          width="420"
          height="250"
          loading="lazy"
          decoding="async"
          className="img-2"
        />{" "}
      </div>

      {/* <div>
        <span className="mt-10 mb-10 text-neutral-400 text-center text-4xl leading-[3.5rem] tracking-tight font-semibold">
          Your favorite tools at your disposal
        </span>
        <div className="flex flex-col gap-4">
          <div className="gap-4 grid grid-cols-2">
            {" "}
            <video
              className="video-player "
              src="https://d1rem61pdixo0z.cloudfront.net/website-cdn/public/img/studio/flatlay.webm"
              poster="https://cdn.sanity.io/images/g4ms2fk8/production/828c23c516e871a3ddd865c4db5034c183055b47-361x400.png"
              muted=""
              playsinline=""
            >
              Your browser does not support the video tag.
            </video>
            <video
              className="video-player "
              src="https://d1rem61pdixo0z.cloudfront.net/website-cdn/public/img/studio/feature_3.webm"
              poster="https://cdn.sanity.io/images/g4ms2fk8/production/3b33f7a064dc76ce062fc233ba7ceaa45a7362e6-361x400.png"
              muted=""
              playsinline=""
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="flex gap-4">
            <video
              className="video-player "
              src="https://d1rem61pdixo0z.cloudfront.net/website-cdn/public/img/studio/feature_2_christmas.webm"
              poster="https://cdn.sanity.io/images/g4ms2fk8/production/6517690351fa86510cc0a9d019bb1d515d8eabaf-361x400.png"
              muted=""
              playsinline=""
            >
              Your browser does not support the video tag.
            </video>
            <video
              className="video-player "
              src="https://d1rem61pdixo0z.cloudfront.net/website-cdn/public/img/studio/feature_4.webm"
              poster="https://cdn.sanity.io/images/g4ms2fk8/production/8f51418a68b23471e769d12353add078fc309f35-361x400.png"
              muted=""
              playsinline=""
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default BlackSection;
