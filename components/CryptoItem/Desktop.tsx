import React from 'react';
import Image from 'next/image';

import { CryptoCoin } from '../../interfaces/crypto';
import { CryptoPrice } from '../../interfaces/price';
import {
  CoinCurrency,
  CoinIdentity,
  CoinName,
  CoinPrice,
  CoinSymbol,
  CoinNameWrapper,
} from '../../styles/CryptoItem';
import { Td, Tr } from '../../styles/MarketTable';
import useCryptoItem from './useCryptoItem';

interface CryptoProps {
  coin: CryptoCoin
  price: CryptoPrice
}

const CryptoItem = (props: CryptoProps) => {
  const { coin, price } = props;
  const { upDownStatus, formatCurrency } = useCryptoItem(price?.latestPrice);

  return (
    <Tr body>
      <Td>
        <CoinIdentity>
          <Image src={coin.logo} alt="Crypto Logo" width="40" height="40" />
          <CoinNameWrapper>
            <CoinName>{coin.name}</CoinName>
            <CoinSymbol>{coin.currencySymbol}</CoinSymbol>
          </CoinNameWrapper>
        </CoinIdentity>
      </Td>
      <Td>
        <CoinCurrency upDownStatus={upDownStatus}>
          Rp {formatCurrency(parseInt(price?.latestPrice))}
        </CoinCurrency>
      </Td>
      <Td>
        <CoinPrice price={parseFloat(price?.day ?? '0')}>
          {price?.day ?? '0.00'}%
        </CoinPrice>
      </Td>
      <Td>
        <CoinPrice price={parseFloat(price?.week ?? '0')}>
          {price?.week ?? '0.00'}%
        </CoinPrice>
      </Td>
      <Td>
        <CoinPrice price={parseFloat(price?.month ?? '0')}>
          {price?.month ?? '0.00'}%
        </CoinPrice>
      </Td>
      <Td>
        <CoinPrice price={parseFloat(price?.year ?? '0')}>
          {price?.year ?? '0.00'}%
        </CoinPrice>
      </Td>
    </Tr>
  );
};

export default CryptoItem;
