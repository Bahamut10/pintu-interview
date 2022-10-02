import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';

import { Container, Heading, Title } from '../styles/Globals';
import Input from '../components/common/Input';
import TopMover from '../components/TopMover';
import Crypto from '../network/Crypto';
import { CryptoCoin } from '../interfaces/crypto';
import { CryptoPrice } from '../interfaces/price';
import MarketTable from '../components/MarketTable';
import MarketTags from '../components/MarketTag';
import { CryptoTag } from '../interfaces/tags';
import useTopMover from '../components/TopMover/useTopMover';

interface Props {
  coin: CryptoCoin[]
  price: CryptoPrice[]
  tags: CryptoTag[]
  topMover: Array<CryptoCoin & CryptoPrice>
}

const Home: NextPage<Props> = (props: Props) => {
  const { coin, price, tags, topMover } = props;

  return (
    <Container>
      <Heading>
        <Title>Harga Crypto Hari Ini (Rupiah)</Title>
        <Input />
      </Heading>
      <TopMover topMover={topMover} />
      <MarketTags tags={tags} />
      <MarketTable coin={coin} price={price} />
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { getTopMover } = useTopMover();

  const { payload: coin } = await Crypto.getCryptoList();
  const { payload: price } = await Crypto.getCryptoPriceChanges();
  const { data: tags } = await Crypto.getMarketTags();

  const topMover = getTopMover(coin, price);

  return {
    props: {
      coin,
      price,
      tags,
      topMover,
    }
  }
}

export default Home;
