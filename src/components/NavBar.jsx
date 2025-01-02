import React from "react";

function NavBar({ onBackClick, selectedMood }) {
  return (
    <>
      <div className="navbar bg-slate-100/5 py-2 my-2 mt-4 rounded-[15px] shadow-xl center-container">
        <div className="navbar-start">
          <button
            onClick={onBackClick}
            className="text-3xl btn btn-ghost btn-circle"
          >
            ⛩️
          </button>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">
            <h1>{selectedMood ? `${selectedMood}` : "Mood2Anime"}</h1>
          </a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle" onClick={onBackClick}>
            <svg
              height={20}
              width={20}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z"
                  fill="#ffffff"
                ></path>{" "}
              </g>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
