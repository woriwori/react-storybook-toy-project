import React from 'react';
import ChangeStatusButton from './ChangeStatusButton';
import { USER_STATUS } from '@/constants';

export default {
  title: 'components/users/ChangeStatusButton',
};

const Template = (args) => <ChangeStatusButton {...args} />;

export const Playground = Template.bind({});
Playground.argTypes = {
  status: {
    description: "User's current status",
    control: {
      type: 'radio',
      options: Object.keys(USER_STATUS),
    },
  },
};
Playground.args = {
  status: USER_STATUS.ACTIVE,
};
