import { ComponentStory } from '@storybook/react';
import React from 'react';
import CryptoItem from '../../components/CryptoItem/Desktop';

export default {
  title: 'Components/CryptoItem/Desktop',
  component: CryptoItem,
};

const Template: ComponentStory<typeof CryptoItem> = (args) => <CryptoItem {...args} />;

export const Main = Template.bind({});
Main.args = {
  coin: {
    currencyGroup: 'BTC',
    color: '#F78B1A',
    currencySymbol: 'BTC',
    name: 'Bitcoin',
    logo: 'https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_BTC.svg',
    decimal_point: 8,
    listingDate: new Date('2020-03-11T15:13:52.000Z'),
    wallets: [
      {
        currencyGroup: 'BTC',
        tokenSymbol: 'BTC',
        decimal_point: 8,
        tokenType: 'Bitcoin',
        blockchain: 'Bitcoin',
        explorer: 'https://explorer.bitcoin.com/btc/tx/',
        listingDate: new Date('2020-09-15T09:43:42.000Z'),
        blockchainName: 'Bitcoin',
        logo: 'https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/Bitcoin.svg'
      }
    ]
  },
  price: {
    pair: 'btc/idr',
    latestPrice: '297040844',
    day: '-0.20',
    week: '4.91',
    month: '-0.39',
    year: '-56.63'
  }
};
