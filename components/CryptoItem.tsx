import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Icon } from '@iconify/react';

import { CryptoCoin } from "../interfaces/crypto";
import { CryptoPrice } from "../interfaces/price";
import { CoinCurrency, CoinIdentity, CoinName, CoinPrice, CoinSymbol } from "../styles/CryptoItem";
import { Td } from "../styles/MarketTable";

interface CryptoProps {
  coin: CryptoCoin;
  price: CryptoPrice;
}

const CryptoItem = (props: CryptoProps) => {
  const { coin, price } = props;
  const [prevPrice, setPrevPrice] = useState(Number.NEGATIVE_INFINITY);
  const [upDownStatus, setUpDownStatus] = useState('neutral');
  
  const formatCurrency = (value: number): string | undefined => {
    const isEmpty = +value === 0;
    const isNaN = Number.isNaN(+value);
    if (isEmpty || isNaN) {
      return '-';
    }
    const format = Math.round(value).toString().split('').reverse()
      .join('');
    const convert = format?.match(/\d{1,3}/g);
    const result = convert?.join('.').split('').reverse().join('');
    return result;
  }

  const compareCoinPrice = () => {
    let up = prevPrice < parseInt(price?.latestPrice);
    setPrevPrice(parseInt(price?.latestPrice))
    setUpDownStatus(up ? 'up' : 'down')
    setTimeout(() => {
      setUpDownStatus('neutral')
    }, 500)
  }

  useEffect(() => {
    compareCoinPrice();
  }, [price?.latestPrice]);

  return (
    <>
      <Td>
        <CoinIdentity>
          <Image src={coin.logo} alt="Crypto Logo" width="40" height="40" />
          <CoinName>{coin.name}</CoinName>
        </CoinIdentity>
      </Td>
      <Td>
        <CoinSymbol>{coin.currencySymbol}</CoinSymbol>
      </Td>
      <Td>
        <CoinCurrency upDownStatus={upDownStatus}>Rp {formatCurrency(parseInt(price?.latestPrice))}</CoinCurrency>
      </Td>
      <Td>
        <CoinPrice price={parseFloat(price?.day!)}>
          {price?.day || '0.00'}%
        </CoinPrice>
      </Td>
      <Td>
        <CoinPrice price={parseFloat(price?.week!)}>
          {price?.week || '0.00'}%
        </CoinPrice>
      </Td>
      <Td>
        <CoinPrice price={parseFloat(price?.month!)}>
          {price?.month || '0.00'}%
        </CoinPrice>
      </Td>
      <Td>
        <CoinPrice price={parseFloat(price?.year!)}>
          {price?.year || '0.00'}%
        </CoinPrice>
      </Td>
    </>
  );
};

export default CryptoItem;
