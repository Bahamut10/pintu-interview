import React, { ChangeEvent, useState } from 'react';
import { CryptoCoin } from '../../interfaces/crypto';
import { CryptoPrice } from '../../interfaces/price';

import {
  List,
  ListBody,
  ListHead,
  ListTitle,
  Select,
} from '../../styles/MarketTable';
import CryptoItem from '../CryptoItem/Mobile';

import useMarketTable from './useMarketTable';

interface Props {
  coin: CryptoCoin[]
  price: CryptoPrice[]
}

const MarketTableMobile = (props: Props) => {
  const { coin, price } = props;
  const { data, isCoinDelisted, getPrice } =
    useMarketTable(coin, price);

  const [option, setOption] = useState('day');
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setOption(e.target.value);

  return (
    <div className="block lg:hidden">
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
    </div>
  );
};

export default MarketTableMobile;
