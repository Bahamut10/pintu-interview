import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { CryptoCoin, Response } from "../interfaces/crypto";
import { CryptoPrice } from "../interfaces/price";
import Crypto from "../network/Crypto";
import { Title } from "../styles/Home";

import { Table, TBody, Th, Thead, Tr } from "../styles/MarketTable";
import CryptoItem from "./CryptoItem";

interface MarketTableProps {
  asset?: string;
}

const MarketTable = (props: MarketTableProps) => {
  const { asset } = props;
  const [data, setData] = useState<CryptoCoin[]>();

  const { data: coinData, isLoading } = useQuery('coin-list', () => Crypto.getCryptoList());

  const { data: priceData } = useQuery('price-change', () => (
    Crypto.getCryptoPriceChanges()
  ), {
    refetchInterval: 1000,
  });

  const getPrice = (coin: CryptoCoin): CryptoPrice => (
    priceData?.payload?.filter((data) => data.pair.split('/')[0] === coin.currencySymbol.toLocaleLowerCase())[0]
  )

  const handleTyping = () => {
    if (asset !== '') {
      setData(coinData?.payload?.filter((val) => val.name.toLowerCase().includes(asset!)))
    } else {
      setData(coinData?.payload);
    }
  }

  useEffect(() => {
    handleTyping();
  }, [asset]);

  useEffect(() => {
    setData(coinData?.payload);
  }, [coinData])

  if (isLoading) return <Title>Loading...</Title>

  return (
    <Table>
      <Thead>
        <Tr head>
          <Th>CRYPTO</Th>
          <Th></Th>
          <Th>HARGA</Th>
          <Th>24 JAM</Th>
          <Th>1 MGG</Th>
          <Th>1 BLN</Th>
          <Th>1 1THN</Th>
        </Tr>
      </Thead>
      <TBody>
      {
        data?.map((coin, i) => (
          <Tr key={coin.currencyGroup} body>
            <CryptoItem coin={coin} price={getPrice(coin)} />
          </Tr>
        ))
      }
      </TBody>
    </Table>
  )
}

export default MarketTable;
