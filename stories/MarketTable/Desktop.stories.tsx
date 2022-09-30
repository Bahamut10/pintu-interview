import { ComponentStory } from '@storybook/react';
import React from 'react';
import MarketTable from '../../components/MarketTable/Desktop';

export default {
  title: 'Components/MarketTable/Desktop',
  component: MarketTable,
};

const Template: ComponentStory<typeof MarketTable> = () => <MarketTable />;

export const Main = Template.bind({});
