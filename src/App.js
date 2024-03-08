import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/header';
import axios from 'axios';
import Main from './components/main/main';
import { Audio, BallTriangle, Bars, Circles, Grid, Hearts, Oval, Puff, Rings, TailSpin, ThreeCircles } from 'react-loader-spinner';

function App() {

  const [data, setData] = useState(null)


  const images = [
    {link: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400'},
    {link: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628'},
    {link: 'https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661'},
    {link: 'https://assets.coingecko.com/coins/images/4128/large/solana.png?1696504756'},
    {link: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970'},
    {link: 'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442'},
    {link: 'https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694'},
    {link: 'https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1696513206'},
    {link: 'https://assets.coingecko.com/coins/images/975/large/cardano.png?1696502090'},
    {link: 'https://assets.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png?1696512369'},
    {link: 'https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1696501409'},
    {link: 'https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1696502009'},
    {link: 'https://assets.coingecko.com/coins/images/1094/large/tron-logo.png?1696502193'},
    {link: 'https://assets.coingecko.com/coins/images/12171/large/polkadot.png?1696512008'},
    {link: 'https://assets.coingecko.com/coins/images/4713/large/polygon.png?1698233745'},
    {link: 'https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1696507857'},
    {link: 'https://assets.coingecko.com/coins/images/17980/large/ton_symbol.png?1696517498'},
    {link: 'https://assets.coingecko.com/coins/images/14495/large/Internet_Computer_logo.png?1696514180'},
    {link: 'https://assets.coingecko.com/coins/images/11939/large/shiba.png?1696511800'},
    {link: 'https://assets.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png?1696501932'},
]

  useEffect(() => {
    axios.get('https://openapiv1.coinstats.app/coins', {
      headers: {'X-API-KEY': 'raWX7pw7uRe7ZL+10LCfOhVgmNkTAbJk9PuWcpbwl04='}
    })
      .then(response => setData(response.data.result))
      .catch(err => console.log(`Malumot olinmadi: ${err}`))
  }, [])


  return (

    <div className="App">
        {data ? (
          <Header data={data} images={images}/>

          ) : (
          <div className='spinner text-center'>
              <ThreeCircles  className='mx-auto ' height={100} width={100} color='#db00d9' ariaLabel='Loading'/>
          </div>
        )}
        {data? (
          <Main images={images} data={data}/>
        ) : (
          null
        )}
    </div>
  );
}

export default App;
