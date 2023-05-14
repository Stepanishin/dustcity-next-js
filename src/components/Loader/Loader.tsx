"use client";

import React from "react";

interface LoaderInterfaceProps {
  loaderColor: string;
  loaderHeight: number;
  loaderWidth: number;
  isVisible: boolean;
  loaderQuantity: number;
}

const Loader: React.FC<LoaderInterfaceProps> = ({
  loaderColor = "rgb(50, 128, 205)",
  loaderHeight = 80,
  loaderWidth = 50,
  isVisible = true,
  loaderQuantity = 10,
}) => {
  let barStyle = {
    backgroundColor: loaderColor,
    height: `${loaderHeight}px`,
    width: `${loaderWidth}px`,
    animationDelay: "",
  };

  React.useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes loader {
        0% {
          transform: scaleY(0.1);
        }
        50% {
          transform: scaleY(1);
          background: ${loaderColor};
        }
        100% {
          transform: scaleY(0.1);
          background: transparent;
        }
      }
      `;
    document.head.appendChild(style);

    const container = document.getElementById("LoaderWrapperMiddle");
    container!.innerHTML = "";
    let row = 0.1;
    for (let i = 0; i < loaderQuantity; i++) {
      const bar = document.createElement("div");
      bar.className = `inline-block origin-bottom-center rounded-t-xl animate-bounce bar${i}`;
      row += 0.1;
      barStyle.animationDelay = ` ${row}s`;
      Object.assign(bar.style, barStyle);
      container!.appendChild(bar);
    }
    return () => {
      document.head.removeChild(style);
    };
  }, [loaderColor, loaderHeight, loaderWidth, loaderQuantity]);

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            id="LoaderWrapperMiddle"
          ></div>
        </div>
      )}
    </>
  );
};

export default Loader;
