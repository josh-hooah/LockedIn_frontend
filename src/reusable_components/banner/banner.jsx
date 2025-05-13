import React from "react";
import './banner.css'
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="w-full h-screen bg-[#2A0845] flex items-center justify-center fixed top-0 left-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        width="300"
        height="300"
      >
        <defs>
          <path
            id="orbit1"
            d="M250,250 m-180,0 a180,180 0 1,1 360,0 a180,180 0 1,1 -360,0"
          />
          <path
            id="orbit2"
            d="M250,250 m-130,0 a130,130 0 1,1 260,0 a130,130 0 1,1 -260,0"
          />
          <path
            id="orbit3"
            d="M250,250 m-90,0 a90,90 0 1,1 180,0 a90,90 0 1,1 -180,0"
          />

          <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#9C27B0" />
            <stop offset="100%" stopColor="#CE93D8" />
          </linearGradient>
          <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7B1FA2" />
            <stop offset="100%" stopColor="#BA68C8" />
          </linearGradient>
          <linearGradient id="grad3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6A1B9A" />
            <stop offset="100%" stopColor="#AB47BC" />
          </linearGradient>
        </defs>

        <circle cx="250" cy="250" r="180" fill="none" stroke="#9575CD" strokeWidth="14" />
        <circle cx="250" cy="250" r="130" fill="none" stroke="#B39DDB" strokeWidth="12" />
        <circle cx="250" cy="250" r="90" fill="none" stroke="#D1C4E9" strokeWidth="10" />
        <circle cx="250" cy="250" r="10" fill="#E1BEE7" />

        <rect width="72" height="144" rx="12" ry="12" fill="url(#grad1)" className="hover:scale-105 transition-transform duration-300">
          <animateMotion dur="12s" repeatCount="indefinite" rotate="auto">
            <mpath href="#orbit1" />
          </animateMotion>
        </rect>

        <rect width="60" height="120" rx="10" ry="10" fill="url(#grad2)" className="hover:scale-105 transition-transform duration-300">
          <animateMotion dur="8s" repeatCount="indefinite" rotate="auto-reverse">
            <mpath href="#orbit2" />
          </animateMotion>
        </rect>

        <rect width="48" height="96" rx="10" ry="10" fill="url(#grad3)" className="hover:scale-105 transition-transform duration-300">
          <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
            <mpath href="#orbit3" />
          </animateMotion>
        </rect>
      </svg>

      <h1>LockedIn AI</h1>
      <p>Stay Focused, Stay LOCKEDIN</p>

      <div className="getStarted">
        <Link to ='/login'>
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
