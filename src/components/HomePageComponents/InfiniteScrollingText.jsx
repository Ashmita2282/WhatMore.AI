import React from "react";

const InfiniteScrollingText = () => {
  const text = "Watch your images turn into studio-quality, cinematic videos";
  const url = "https://www.youtube.com/watch?v=DVbZLcsBkrQ";

  return (
    <div className="overflow-hidden w-full bg-[#151414]">
      <div className="relative flex items-center animate-scroll ">
        {/* Repeat the content multiple times for smooth infinite scrolling */}
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="flex items-center gap-10 py-1 pr-12 flex-shrink-0"
          >
            <a
              className="text-white font-geist text-xs font-semibold leading-6"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {text} -{" "}
              <s className="font-bold  font-geist bg-gradient-to-br from-[#fd9bb8] to-[#cf9ff9] bg-clip-text text-transparent">
                See how
              </s>
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M8 0V8M8 8V16M8 8H0M8 8H16M8 8L2.34324 2.34315M8 8L13.6569 13.6569M8 8L2.34324 13.6569M8 8L13.6569 2.34315"
                stroke="#938A8C"
                strokeWidth="1.2"
              ></path>
            </svg>
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default InfiniteScrollingText;
