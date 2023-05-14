"use client";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Suspense } from "react";
import Image from "next/image";
import Loader from "@/components/Loader/Loader";

const RoadMap = () => {
  return (
    <Suspense
      fallback={
        <Loader
          loaderColor={"#ffcc15"}
          loaderHeight={40}
          loaderWidth={10}
          isVisible={true}
          loaderQuantity={8}
        />
      }
    >
      <TransformWrapper
        initialScale={1}
        initialPositionX={0}
        initialPositionY={0}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <>
            <div className="border-custom-color-border border-solid border-8 p-5 mt-5">
              <TransformComponent>
                <Image
                  src="/RoadMap.png"
                  alt="RoadMap"
                  width={1920}
                  height={1080}
                />
              </TransformComponent>

              <p className=" opacity-60 text-center relative top-3 ">
                (Scroll or click on the image to get a more detailed view of our
                roadmap)
              </p>
            </div>
          </>
        )}
      </TransformWrapper>
    </Suspense>
  );
};

export default RoadMap;
