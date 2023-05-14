import Image from "next/image";

const SocialList = ({}) => {
  return (
    <ul className="flex justify-center gap-10 items-center ">
      <li>
        <a href="https://dustcity.world/">
          <Image
            src="./icon-discord.svg"
            alt="discord"
            width={25}
            height={25}
          />
        </a>
      </li>
      <li>
        <a href="https://dustcity.world/">
          <Image
            src="./icon-twitter.svg"
            alt="twitter"
            width={25}
            height={25}
          />
        </a>
      </li>
      <li>
        <a href="https://dustcity.world/">
          <Image
            src="./icon-magiceden.svg"
            alt="magiceden"
            width={28}
            height={28}
          />
        </a>
      </li>
    </ul>
  );
};

export default SocialList;
