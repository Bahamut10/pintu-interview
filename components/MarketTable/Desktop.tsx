import React from 'react';

import { Title } from '../../styles/Home';
import { Table, TBody, Th, Thead, Tr } from '../../styles/MarketTable';
import CryptoItem from '../CryptoItem/Desktop';
import useMarketTable from './useMarketTable';

const MarketTableDesktop = () => {
  const { data, isLoading, isCoinDelisted, getPrice } =
    useMarketTable();

  if (isLoading) return <Title>Loading...</Title>;

  return (
    <>
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
    </>
  );
};

export default MarketTableDesktop;
