import Link from "next/link";

const Coin = ({ coin }) => {

    return (
        <>
        <div className="coin-page bg-slate-800 text-white h-screen">
        <div>
        <Link href="/">
            <a className="font-mono font-extrabold text-3xl flex justify-center pt-10">CRYPTOTRACKER</a>
        </Link>
        </div>
        <div className="h-3/4 w-1/4 border-4 border-sky-600 flex justify-center mx-auto rounded-md mt-20">
                <div className="coin-container flex justify-center items-center flex-col text-lg">
                    <img className="coin-image mb-2" 
                    src={coin.image.large} 
                    alt={coin.name}
                     />
                    <h1 className="coin-name mb-2">{coin.name}</h1>
                    <p className="coin-sticker mb-2 uppercase">{coin.symbol}</p>
                    <p className="coin-current mb-2"> Marketcap : {coin.market_data.current_price.usd}</p>
                </div>
                </div>
            </div>
        </>
    )
}
export default Coin;

export async function getServerSideProps(context) {
    const { id } = context.query
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)

    const data = await res.json()

    return {
        props: {
            coin: data
        }
    }
}