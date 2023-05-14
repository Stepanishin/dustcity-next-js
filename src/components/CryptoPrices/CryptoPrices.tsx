import React from "react";

interface PriceData {
  bitcoin: number;
  nctr: number;
  dustCityNft: number;
  solana: number;
}

// TODO: Add more prices and rewrite this function as hepler
const getPrices = async () => {
  let bitcoinPrice = 0;
  let solanaPrice = 0;

  const responseBitcoin = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
    { next: { revalidate: 60 } }
  );
  const dataBitcoin = await responseBitcoin.json();
  bitcoinPrice = dataBitcoin["bitcoin"]["usd"];

  const responseSolana = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd",
    { next: { revalidate: 60 } }
  );
  const dataSolana = await responseSolana.json();
  solanaPrice = dataSolana["solana"]["usd"];

  return {
    bitcoin: bitcoinPrice,
    nctr: 0.03,
    dustCityNft: 6.1,
    solana: solanaPrice,
  };
};

export default async function CryptoPrices() {
  const prices = await getPrices();

  return (
    <div className="flex-row items-center justify-around shadow-md pb-6 md:flex hidden opacity-60 ">
      {prices && (
        <div className="flex flex-row space-x-4">
          <div className="flex flex-row gap-1">
            <span>Bitcoin:</span>
            <span>{prices.bitcoin}$</span>
          </div>
          <div className="flex flex-row gap-1">
            <span>NCTR:</span>
            <span>{prices.nctr}$</span>
          </div>
          <div className="flex flex-row gap-1">
            <span>Dust City NFT:</span>
            <span>{prices.dustCityNft} SOL</span>
          </div>
          <div className="flex flex-row gap-1">
            <span>Solana:</span>
            <span>{prices.solana}$</span>
          </div>
        </div>
      )}
    </div>
  );
}
