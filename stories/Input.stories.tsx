import { ComponentStory } from '@storybook/react';
import React from 'react';
import Input from '../components/common/Input';

export default {
  title: 'Components/Input',
  component: Input,
};

const Template: ComponentStory<typeof Input> = () => <Input />;

export const Main = Template.bind({});
