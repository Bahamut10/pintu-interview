import React, { useEffect, useState } from 'react';
import { useMarketContext } from '../../contexts/MarketContext';
import { CryptoCoin } from '../../interfaces/crypto';
import { CryptoPrice } from '../../interfaces/price';

import { TopMoverWrapper, Title as TopMoverTitle } from '../../styles/TopMover';
import TopMoverTile from './TopMoverTile';

interface Props {
  topMover: Array<CryptoCoin & CryptoPrice>
}

const TopMover = ({ topMover }: Props) => {
  const { topMover: topMoverContext } = useMarketContext();
  const [data, setData] = useState<Array<CryptoCoin & CryptoPrice>>(topMover);

  useEffect(() => {
    if (topMoverContext.length > 0) setData(topMoverContext)
  }, [topMoverContext])

  if (topMover?.length > 0) {
    return (
      <>
        <TopMoverTitle>🔥 Top Movers (24 Jam)</TopMoverTitle>
        <TopMoverWrapper>
          {data?.map((coin) => (
            <TopMoverTile key={coin.currencySymbol} coin={coin} />
          ))}
        </TopMoverWrapper>
      </>
    )
  } else return <></>
}

export default TopMover;
