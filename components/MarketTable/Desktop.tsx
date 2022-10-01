import React from 'react';
import { CryptoCoin } from '../../interfaces/crypto';
import { CryptoPrice } from '../../interfaces/price';

import { Table, TBody, Th, Thead, Tr } from '../../styles/MarketTable';
import CryptoItem from '../CryptoItem/Desktop';
import useMarketTable from './useMarketTable';

interface Props {
  coin: CryptoCoin[]
  price: CryptoPrice[]
}

const MarketTableDesktop = (props: Props) => {
  const { coin, price } = props;
  const { data, isCoinDelisted, getPrice } =
    useMarketTable(coin, price);

  return (
    <div className="hidden lg:block">
      <Table>
        <Thead>
          <Tr head>
            <Th>CRYPTO</Th>
            <Th>HARGA</Th>
            <Th>24 JAM</Th>
            <Th>1 MGG</Th>
            <Th>1 BLN</Th>
            <Th>1 THN</Th>
          </Tr>
        </Thead>
        <TBody>
          {data?.map(
            (coin) =>
              !isCoinDelisted(coin) && (
                <CryptoItem
                  key={coin.currencyGroup}
                  coin={coin}
                  price={getPrice(coin)!}
                />
              )
          )}
        </TBody>
      </Table>
    </div>
  );
};

export default MarketTableDesktop;
