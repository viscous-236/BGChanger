import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("rgba(45, 104, 214, 0.464)");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div
            className="flex flex-wrap justify-center items-center gap-3 py-4 px-6 rounded-3xl"
            style={{
              backgroundColor:
                "rgba(108, 117, 125, 0.5)" /* Transparent slate-gray */,
              boxShadow:
                "0 8px 20px rgba(0, 0, 0, 0.4), 0 12px 30px rgba(0, 0, 0, 0.3)" /* 3D shadow */,
              border:
                "1px solid rgba(255, 255, 255, 0.3)" /* Subtle border for contrast */,
              backdropFilter: "blur(10px)" /* Frosted glass effect */,
              transform: "translateZ(15px)",
              perspective: "1000px",
              color: "#fff" /* White text */,
              textAlign: "center",
            }}
          >
            <button
              onClick={() => setColor("red")}
              className="px-6 py-2 rounded-full text-white font-semibold"
              style={{
                backgroundColor:
                  "red",
                boxShadow:
                  "0 4px 6px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(255, 255, 255, 0.2)" /* Button shadow */,
                border: "none",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.1)";
                e.target.style.boxShadow =
                  "0 6px 10px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(255, 255, 255, 0.3)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow =
                  "0 4px 6px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(255, 255, 255, 0.2)";
              }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="px-6 py-2 rounded-full text-white font-semibold"
              style={{
                backgroundColor:
                  "yellow",
                boxShadow:
                  "0 4px 6px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(255, 255, 255, 0.2)" /* Button shadow */,
                border: "none",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.1)";
                e.target.style.boxShadow =
                  "0 6px 10px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(255, 255, 255, 0.3)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow =
                  "0 4px 6px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(255, 255, 255, 0.2)";
              }}
            >
              Yellow
            </button>
            <button
            onClick={() => setColor("purple")}
              className="px-6 py-2 rounded-full text-white font-semibold"
              style={{
                backgroundColor:
                  "purple",
                boxShadow:
                  "0 4px 6px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(255, 255, 255, 0.2)" /* Button shadow */,
                border: "none",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.1)";
                e.target.style.boxShadow =
                  "0 6px 10px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(255, 255, 255, 0.3)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow =
                  "0 4px 6px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(255, 255, 255, 0.2)";
              }}
            >
              Purple
            </button>
            <button
            onClick={() => setColor("orange")}
              className="px-6 py-2 rounded-full text-white font-semibold"
              style={{
                backgroundColor:
                  "Orange",
                boxShadow:
                  "0 4px 6px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(255, 255, 255, 0.2)" /* Button shadow */,
                border: "none",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.1)";
                e.target.style.boxShadow =
                  "0 6px 10px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(255, 255, 255, 0.3)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow =
                  "0 4px 6px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(255, 255, 255, 0.2)";
              }}
            >
              Orange
            </button>
            <button
            onClick={() => setColor("black")}
              className="px-6 py-2 rounded-full text-white font-semibold"
              style={{
                backgroundColor:
                  "Black",
                boxShadow:
                  "0 4px 6px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(255, 255, 255, 0.2)" /* Button shadow */,
                border: "none",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.1)";
                e.target.style.boxShadow =
                  "0 6px 10px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(255, 255, 255, 0.3)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow =
                  "0 4px 6px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(255, 255, 255, 0.2)";
              }}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
