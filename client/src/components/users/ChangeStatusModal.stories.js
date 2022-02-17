import React from 'react';
import ChangeStatusModal from './ChangeStatusModal';
import { USER_STATUS } from '@/constants';
import { action } from '@storybook/addon-actions';

export default {
  title: 'components/users/ChangeStatusModal',
};

const Template = (args) => <ChangeStatusModal {...args} />;

export const Playground = Template.bind({});
Playground.argTypes = {
  visible: {
    description: 'Visibility of the modal',
    control: {
      type: 'radio',
      options: [true, false],
    },
  },
  status: {
    description: "User's current status",
    control: {
      type: 'radio',
      options: Object.keys(USER_STATUS),
    },
  },
};
Playground.args = {
  visible: true,
  status: USER_STATUS.ACTIVE,
  onChangeVisible: action('onChangeVisible'),
};
