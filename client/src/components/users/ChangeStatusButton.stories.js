import React from 'react';
import ChangeStatusButton from './ChangeStatusButton';
import { USER_STATUS } from '@/constants';

export default {
  title: 'components/users/ChangeStatusButton',
  argTypes: {
    status: {
      description: "User's current status",
      control: {
        type: 'radio',
        options: Object.keys(USER_STATUS),
      },
    },
  },
  args: {
    status: USER_STATUS.ACTIVE,
  },
};

const Template = (args) => <ChangeStatusButton {...args} />;

export const Playground = Template.bind({});

export const Default = Template.bind({});
Default.argTypes = {
  status: { table: { disable: true } },
};
Default.parameters = {
  jest: 'ChangeStatusButton.test.js',
};
