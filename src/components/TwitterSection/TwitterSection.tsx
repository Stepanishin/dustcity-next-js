"use client";

import { TwitterTweetEmbed } from "react-twitter-embed";
import { useState } from "react";

const TwitterSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section style={{ visibility: isLoaded ? "visible" : "hidden" }}>
      <h2 className="text-2xl text-center md:text-4xl sm:text-2xl mt-36 ">
        RELATED TWEETS
      </h2>
      <div className="mt-8">
        <TwitterTweetEmbed
          onLoad={function noRefCheck() {
            setIsLoaded(true);
          }}
          tweetId="1655227835945033729"
          options={{
            theme: "dark",
            height: 500,
            width: 600,
            minWidth: 600,
            hideCard: false,
            hideThread: false,
          }}
        />
      </div>
    </section>
  );
};

export default TwitterSection;
