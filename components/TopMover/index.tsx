import React from 'react';
import Image from 'next/image';

import { CryptoCoin } from '../../interfaces/crypto';
import { CryptoPrice } from '../../interfaces/price';
import {
  CoinIdentity,
  CoinNameWrapper,
  CoinName,
  CoinPrice,
  TopCoinWrapper,
  CoinMovement,
} from '../../styles/TopMover';
import useCryptoItem from '../CryptoItem/useCryptoItem';

interface TopMoverProps {
  coin: CryptoCoin & CryptoPrice
}

const TopMover = (props: TopMoverProps) => {
  const { coin } = props;
  const { formatCurrency } = useCryptoItem(coin.latestPrice);

  return (
    <TopCoinWrapper>
      <CoinIdentity>
        <Image src={coin.logo} alt="Crypto Logo" width="40" height="40" />
        <CoinNameWrapper>
          <CoinName>{coin.name}</CoinName>
        </CoinNameWrapper>
      </CoinIdentity>
      <CoinPrice>Rp {formatCurrency(parseInt(coin.latestPrice))}</CoinPrice>
      <CoinMovement price={parseFloat(coin.day ?? '0.00')}>{coin.day}%</CoinMovement>
    </TopCoinWrapper>
  );
};

export default TopMover;
