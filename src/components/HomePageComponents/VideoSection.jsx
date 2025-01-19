import React, { useEffect } from "react";

const VideoSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://d1qflh9ill7vje.cloudfront.net/whatmore.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className=" flex flex-col justify-center items-center mt-12">
      <h1 className="w-[70%] text-center text-[50px] font-normal leading-[64px] tracking-[-1.12px]">
        {" "}
        Effortless, high-quality videos for any platform with{" "}
        <span className="font-bold">Whatmore Studio</span>
      </h1>

      <div className="flex justify-center md:w-full">
        <div className="carousel w-full">
          <div className="whatmore-base min-h-[300px]">
            {/* Whatmore Configuration */}
            <div id="whatmoreShopId" data-wh="STR24SOA68L"></div>
            <div id="isWhatmoreWebsite" data-wh="true"></div>
            <div id="whatmoreIsInDesignMode" data-wh="true"></div>
            <div id="whatmoreHeading" data-wh=""></div>
            <div id="whatmorePrimaryColor" data-wh="#d97777"></div>
            <div id="whatmoreSecondaryColor" data-wh="#d97777"></div>
            <div id="whatmoreTitleFontSize" data-wh="28"></div>
            <div id="whatmoreLandscapePadding" data-wh="40"></div>
            <div id="whatmoreTopBottomPadding" data-wh="20"></div>
            <div id="whatmoreVideoTileSize" data-wh="80"></div>
            <div id="whatmoreVideoTileSizePortrait" data-wh="80"></div>
            <div id="whatmoreTitleFont" data-wh="sans-serif"></div>
            <div id="whatmorePrimaryFont" data-wh="sans-serif"></div>
            <div id="whatmoreShowViews" data-wh="show"></div>
            <div className="whatmore-template-type" data-wh="template-h"></div>
            <div id="whatmoreUITheme" data-wh="round"></div>
            <div className="whatmore-render-root"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
