import React from 'react';

import { Square } from '../components/Square';

export default {
  title: 'React-Tutorial/Square',
  component: Square,
}

const Template = (args) => <Square {...args} />;

export const FilledWithCircle = Template.bind({});
FilledWithCircle.args = {
  value: 'O',
};

export const FilledWithCross = Template.bind({});
FilledWithCross.args = {
  value: 'X',
};
