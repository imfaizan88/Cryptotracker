import axios from "axios";
import { useState, useEffect } from 'react';
import Coins from "../Components/Coins.js";

function index() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('')
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false')

      .then(res => {
        setCoins(res.data);
      })

      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coins =>
    coins.name.toLowerCase().includes(search.toLowerCase())
  )


  return (
    <>
      <div className="coin-app  flex flex-col items-center pt-10 bg-slate-800 text-white ">
        <div>
          <h1 className="font-mono font-extrabold text-3xl">CRYPTOTRACKER</h1>
          </div>
          <div className="coin-search my-10">
            <input type="text" className="h-10 w-80 pl-10 pr-20 rounded-md text-lg text-black focus:shadow focus:outline-none placeholder-black" placeholder="Search"  onChange={handleChange}/>
          </div>
        <div className="coin-content py-10">
          {filteredCoins.map(coin => {
            return (
              <>
                <Coins
                  key={coin.id}
                  id={coin.id}
                  name={coin.name}
                  image={coin.image}
                  symbol={coin.symbol}
                  marketcap={coin.market_cap}
                  price={coin.current_price}
                  priceChange={coin.price_change_percentage_24h}
                  volume={coin.total_volume}
                />
              </>)
          })}

          <p className="py-10 flex justify-center">Made by Mohammad Faizan Khan</p>
        </div>
      </div>
    </>
  )
}
export default index;