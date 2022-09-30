import React from 'react';
import { useMarketContext } from '../../contexts/MarketContext';

import { TopMoverWrapper, Title as TopMoverTitle } from '../../styles/TopMover';
import TopMoverTile from './TopMoverTile';

const TopMover = () => {
  const { topMover } = useMarketContext();

  return (
    <>
      <TopMoverTitle>🔥 Top Movers (24 Jam)</TopMoverTitle>
      <TopMoverWrapper>
        {topMover?.map((coin) => (
          <TopMoverTile key={coin.currencySymbol} coin={coin} />
        ))}
      </TopMoverWrapper>
    </>
  )
}

export default TopMover;
