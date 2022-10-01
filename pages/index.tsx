import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';

import { Container, Heading, Title } from '../styles/Home';
import Input from '../components/common/Input';
import TopMover from '../components/TopMover';
import Crypto from '../network/Crypto';
import { CryptoCoin } from '../interfaces/crypto';
import { CryptoPrice } from '../interfaces/price';
import MarketTable from '../components/MarketTable';

interface Props {
  coin: CryptoCoin[]
  price: CryptoPrice[]
}

const Home: NextPage<Props> = (props: Props) => {
  const { coin, price } = props;

  return (
    <Container>
      <Heading>
        <Title>Harga Crypto Hari Ini (Rupiah)</Title>
        <Input />
      </Heading>
      <TopMover />
      <MarketTable coin={coin} price={price} />
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { payload: coin } = await Crypto.getCryptoList();
  const { payload: price } = await Crypto.getCryptoPriceChanges();

  return {
    props: {
      coin,
      price
    }
  }
}

export default Home;
