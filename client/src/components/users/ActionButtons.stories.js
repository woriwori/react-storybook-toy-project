import React from 'react';
import ActionButtons from './ActionButtons';
import { USER_STATUS } from '@/constants/index';

export default {
  title: 'ActionButtons',
};

const Template = (args) => <ActionButtons {...args} />;

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
