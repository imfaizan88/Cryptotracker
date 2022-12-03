import React from "react";
import Link from "next/link";

const Coins = ({
    image,
    name,
    symbol,
    price,
    volume,
    priceChange,
    marketcap,
    id
}) => {
    return (
        <>
            <Link href="/coin/[id]" as={`/coin/${id}`}>               
                    <div className="coin-container flex justify-center">
                        <div className="coin-row flex flex-row justify-start items-center h-20 w-11/12  hover:bg-black border-b border-gray-500">
                            <div className="coin flex items-center">
                                <img className="h-10 w-10 mx-5" src={image} alt="crypto" />
                                <h1 className="font-extrabold text-lg w-80">{name}</h1>
                                <p className="coin-symbol font-bold uppercase mr-20">{symbol}</p>
                                <div className="coin-data flex text-center justify-between w-full">
                                    <p className="coin-price font-bold w-36">${price}</p>
                                    <p className="coin-volume font-bold w-28">${volume.toLocaleString()}
                                    </p>

                                    {priceChange < 0 ? (

                                        <p className="coin- w-28 font-bold text-red-800">{priceChange.toFixed(2)}%</p>
                                    ) : (
                                        <p className="coin- w-28 font-bold text-green-800">{priceChange.toFixed(2)}%</p>
                                    )}

                                    <p className="coin-marketcap font-bold w-72">
                                        Market Cap: ${marketcap.toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
            </Link>
        </>
    )
}

export default Coins;