import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black h-screen w-screen aspect-video">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-gray-500 text-white p-4 px-16 text-xl rounded-lg hover: bg-opacity-70">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3l14 9L5 21V3z"
            />
          </svg>
          <span>Play</span>
        </button>
        <button className="bg-gray-500 mx-2 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">More info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
