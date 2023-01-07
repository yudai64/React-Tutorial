import { linkTo } from '@storybook/addon-links';
import { within } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
// import { expect } from '@storybook/jest';
import Button from './Button';

export default {
  title: 'Common/Button',
  component: Button,
  argTypes: {
    color: {
      options: ['primary', 'default', 'danger'],
      control: {type: 'select'},
    },
    size: {
      options: ['sm', 'base', 'lg'],
      control: {type: 'select'},
    },
    backgroundColor: {
      control: {type: 'color'},
    },
    // handleClick: {
    //   action: true,
    // }
  }
};

// export const HelloButton = () => <Button>Hello World!</Button>;
// export const ClickButton = () => <Button>Click!</Button>;

// export const Default = () => <Button>Default</Button>;
// export const Primary = () => <Button color='primary'>Primary</Button>;

// export const PrimarySmall = () => <Button color='primary' size='sm'>PrimarySmall</Button>
// export const PrimaryLarge = () => <Button color='primary' size='lg'>PrimaryLarge</Button>

// Args の利用
const Template = (args) => {
  return (
    <Button
      {...args}
      // handleClick={linkTo('Common/Button', 'Danger')}
    />
  );
};
export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Danger',
  color: 'danger',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  color: 'primary',
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  children: 'PrimarySmall',
  color: 'primary',
  size: 'sm',
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  children: 'PrimaryLarge',
  color: 'primary',
  size: 'lg',
};

PrimaryLarge.play = async ({args, canvasElement}) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
  // await expect(args.handleClick).toHaveBeenCalled();
}

// export const PrimaryLarge2 = Template.bind({});
// PrimaryLarge2.args = {
//   ...Primary.args,
//   children: 'PrimaryLarge2',
//   size: 'lg',
// };