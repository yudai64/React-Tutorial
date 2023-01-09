import React from 'react';

import { Square } from '../index';

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
