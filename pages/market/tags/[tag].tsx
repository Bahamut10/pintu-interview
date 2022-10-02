import { NextPageContext } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

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
}

const TagPage = (props: Props) => {
  const router = useRouter();
  const { coin, coinDetail, price } = props;

  const handleClick = () => router.back();

  return (
    <Container>
      <BackButton onClick={handleClick}>Back</BackButton>
      <TagDetail>
        <Image src={coinDetail?.icon.url} width="30" height="30" alt="market tag icon" />
        <Title>{coinDetail?.title}</Title>
      </TagDetail>
      <Description>{coinDetail?.subtitle}</Description>
      <MarketTable coin={coin} price={price} />
    </Container>
  )
}

TagPage.getInitialProps = async (context: NextPageContext) => {
  const { tag } = context.query;
  const { data: cryptoByTag } = await Crypto.getCryptoListByTag(tag as string)
  const { payload: cryptoList } = await Crypto.getCryptoList()
  const { payload: price } = await Crypto.getCryptoPriceChanges();

  const cryptoIntersection = cryptoList?.filter((value) => cryptoByTag[0].currencies.some((val) => val.name === value.currencySymbol))

  // res.setHeader(
  //   'Cache-Control',
  //   'public, s-maxage=10, stale-while-revalidate=59'
  // )

  return {
    coin: cryptoIntersection,
    price,
    coinDetail: cryptoByTag[0],
  }
}

export default TagPage;
