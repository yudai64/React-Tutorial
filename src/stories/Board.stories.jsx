import React from 'react';

import { Board } from '../components/Board';

export default {
  title: 'React-Tutorial/Board',
  component: Board,
  argTypes: {
    onClick: {
        action: true,
    }
  }
}

const Template = (args) => <Board {...args} />;

export const Initial = Template.bind({});
Initial.args = {
  squares: Array(9).fill(null),
}

export const AllFilledWithTriangle = Template.bind({});
AllFilledWithTriangle.args = {
  squares: Array(9).fill('△'),
}
