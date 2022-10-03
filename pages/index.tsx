import React from 'react';
import Head from 'next/head';
import Swal from 'sweetalert2';

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
  error?: any
}

const Home = (props: Props) => {
  const { coin, error, price, tags, topMover } = props;

  if (typeof error !== 'undefined') {
    void Swal.fire({
      title: 'Oopss...',
      text: 'Something went wrong. Please refresh the page.',
      icon: 'error',
    })
  }

  return (
    <Container>
      <Head>
        <title>Harga Crypto Hari ini (IDR) | Pintu</title>
      </Head>
      <Heading>
        <Title>Harga Crypto Hari Ini (Rupiah)</Title>
        <Input />
      </Heading>
      <TopMover topMover={topMover ?? []} />
      <MarketTags tags={tags ?? []} />
      <MarketTable coin={coin ?? []} price={price ?? []} />
    </Container>
  );
};

Home.getInitialProps = async () => {
  try {
    const { getTopMover } = useTopMover();
    const { payload: coin } = await Crypto.getCryptoList();
    const { payload: price } = await Crypto.getCryptoPriceChanges();
    const { data: tags } = await Crypto.getMarketTags();

    const topMover = getTopMover(coin, price);

    return {
      coin,
      price,
      tags,
      topMover,
    }
  } catch (e) {
    return {
      error: e
    }
  }
}

export default Home;
