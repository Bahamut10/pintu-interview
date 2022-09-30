import { ComponentStory } from '@storybook/react';
import React from 'react';
import MarketTable from '../../components/MarketTable/Mobile';

export default {
  title: 'Components/MarketTable/Mobile',
  component: MarketTable,
};

const Template: ComponentStory<typeof MarketTable> = () => <MarketTable />;

export const Main = Template.bind({});
