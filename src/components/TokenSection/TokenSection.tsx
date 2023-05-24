import Image from "next/image";

const TokenSection = () => {
  return (
    <section className="mt-32 flex justify-center flex-col items-center ">
      <h2 className="text-4xl text-center md:text-7xl sm:text-5xl ">NCTR</h2>
      <p className=" text-center ">
        $NCTR is our exclusive token developed on the Solana Blockchain.
      </p>
      <a
        href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=AgnHzGspNu7F3nFM4izuPt5g7m1URjVaTaFNgvqSXcjC&fixed=in"
        className="w-48 h-10 flex justify-center items-center bg-custom-color-yellow rounded-md text-primary-color-font hover:bg-color-color-yellow-hover mt-3 sm:mt-5 font-semibold "
      >
        Buy on Raydium
      </a>
      <div className="flex justify-center gap-4 mt-6 ">
        <a href="https://birdeye.so/token/AgnHzGspNu7F3nFM4izuPt5g7m1URjVaTaFNgvqSXcjC">
          <Image
            className=" rounded-full "
            src="/bird_logo.jpg"
            alt="logo"
            width={25}
            height={25}
          />
        </a>
        <a href="https://coinmarketcap.com/dexscan/solana/GBJpJeMCzTHKf4yQZzqUrzr9z6SiKamQFP8b2V9ZNEiV/">
          <Image src="/Coin_logo.svg" alt="logo" width={25} height={25} />
        </a>
        <a href="https://dust-city-2.gitbook.io/white-paper/token-usdnctr/tokenomics">
          <Image
            className="text-white relative"
            src="/whitepaper-logo.png"
            alt="logo"
            width={20}
            height={15}
          />
        </a>
      </div>
    </section>
  );
};

export default TokenSection;
