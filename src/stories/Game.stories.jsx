import React from 'react';

import { Game } from '../components/Game';
import '../index.css';

export default {
  title: 'React-Tutorial/Game',
  component: Game,
}

const Template = (args) => <Game {...args} />;

export const Default = Template.bind({});
