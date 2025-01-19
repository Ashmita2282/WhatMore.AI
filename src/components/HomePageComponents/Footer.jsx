import React from "react";

function Footer() {
  return (
    <div>
      <div className="bg-black text-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-pink-500 via-pink-400 to-purple-400 py-12 px-6 rounded-lg max-w-6xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Founders and Marketers, assemble!
            </h2>
            <p className="text-lg">
              Win the video marketing game before everyone else does
            </p>
          </div>
          <button className="mt-6 md:mt-0 bg-black text-white font-medium py-3 px-6 rounded-full flex items-center space-x-2 hover:bg-gray-800 transition">
            <span>Try it yourself</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Footer Section */}
        <footer className="mt-12 py-12 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Column 1 */}
            <div>
              <h3 className="text-lg font-bold mb-4">Features</h3>
              <ul className="space-y-2">
                <li>Shoppable Videos</li>
                <li>Studio</li>
                <li>Free AI Tools</li>
              </ul>
            </div>
            {/* Column 2 */}
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>Blog</li>
                <li>Customer Stories</li>
                <li>Customers</li>
                <li>Partners</li>
                <li>Features</li>
                <li>DIY Demo</li>
                <li>Submit your tool</li>
                <li>Shopify Apps</li>
                <li>FAQs</li>
              </ul>
            </div>
            {/* Column 3 */}
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>Getting started</li>
                <li>About Us</li>
                <li>Pricing</li>
                <li>Terms & Conditions</li>
                <li>Careers</li>
                <li>Contact us</li>
                <li>Schedule a call</li>
              </ul>
            </div>
            {/* Column 4 */}
            <div>
              <h3 className="text-lg font-bold mb-4">Compare</h3>
              <ul className="space-y-2">
                <li>Whatmore Vs Quinn</li>
                <li>Whatmore Vs Vimotia</li>
              </ul>
            </div>
            {/* Column 5 */}
            <div>
              <h3 className="text-lg font-bold mb-4">Free AI Tools</h3>
              <ul className="space-y-2">
                <li>AI Image To Video Converter</li>
                <li>Dropshipping Ads Maker</li>
                <li>Instagram Ads Maker</li>
                <li>Tiktok Ads Maker</li>
                <li>Facebook Ads Maker</li>
                <li>AI Video Maker</li>
                <li>Auto Add Captions</li>
                <li>Amazon Product Review Video</li>
                <li>Instagram Reel Maker</li>
                <li>Add Music To Video</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
