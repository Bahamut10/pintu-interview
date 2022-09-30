import React, { ChangeEvent, useState } from 'react';

import { Title } from '../../styles/Home';
import {
  List,
  ListBody,
  ListHead,
  ListTitle,
  Select,
} from '../../styles/MarketTable';
import CryptoItem from '../CryptoItem/Mobile';

import useMarketTable from './useMarketTable';

const MarketTableMobile = () => {
  const { data, isLoading, isCoinDelisted, getPrice } =
    useMarketTable();

  const [option, setOption] = useState('day');
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setOption(e.target.value);

  if (isLoading) return <Title>Loading...</Title>;

  return (
    <>
      <List>
        <ListHead>
          <ListTitle>Crypto</ListTitle>
          <Select onChange={handleChange}>
            <option value="day">24 JAM</option>
            <option value="week">1 MGG</option>
            <option value="month">1 BLN</option>
            <option value="year">1 THN</option>
          </Select>
        </ListHead>
        <ListBody>
          {data?.map(
            (coin) =>
              !isCoinDelisted(coin) && (
                <CryptoItem
                  key={coin.currencyGroup}
                  coin={coin}
                  price={getPrice(coin)!}
                  duration={option}
                />
              )
          )}
        </ListBody>
      </List>
    </>
  );
};

export default MarketTableMobile;
