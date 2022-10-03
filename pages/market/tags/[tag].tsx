import { NextPageContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import Swal from 'sweetalert2';

import MarketTable from '../../../components/MarketTable';
import { CryptoCoin } from '../../../interfaces/crypto';
import { CryptoPrice } from '../../../interfaces/price';
import { CryptoTag } from '../../../interfaces/tags';
import Crypto from '../../../network/Crypto';
import { Container, Title } from '../../../styles/Globals';
import { BackButton, Description, TagDetail } from '../../../styles/TagPage';

interface Props {
  coin: CryptoCoin[]
  price: CryptoPrice[]
  coinDetail: CryptoTag
  error?: any
}

const TagPage = (props: Props) => {
  const router = useRouter();
  const { coin, error, coinDetail, price } = props;

  const handleClick = () => router.back();

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
        <title>{coinDetail?.meta_title}</title>
      </Head>
      <BackButton onClick={handleClick}>Back</BackButton>
      <TagDetail>
        <Image src={coinDetail?.icon.url ?? ''} width="30" height="30" alt="market tag icon" />
        <Title>{coinDetail?.title ?? ''}</Title>
      </TagDetail>
      <Description>{coinDetail?.subtitle ?? ''}</Description>
      <MarketTable coin={coin ?? []} price={price ?? []} />
    </Container>
  )
}

TagPage.getInitialProps = async (context: NextPageContext) => {
  try {
    const { tag } = context.query;
    const { data: cryptoByTag } = await Crypto.getCryptoListByTag(tag as string)
    const { payload: cryptoList } = await Crypto.getCryptoList()
    const { payload: price } = await Crypto.getCryptoPriceChanges();

    const cryptoIntersection = cryptoList?.filter((value) => cryptoByTag[0].currencies.some((val) => val.name === value.currencySymbol))

    return {
      coin: cryptoIntersection,
      price,
      coinDetail: cryptoByTag[0],
    }
  } catch (e) {
    return {
      error: e
    }
  }
}

export default TagPage;
