import { ComponentStory } from '@storybook/react';
import React from 'react';
import Tag from '../components/common/Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
};

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Main = Template.bind({});
Main.args = {
  icon: 'https://s3.ap-southeast-1.amazonaws.com/content.pintu.co.id/De_Fi_c2cbe56025.svg',
  title: 'DeFi'
}
