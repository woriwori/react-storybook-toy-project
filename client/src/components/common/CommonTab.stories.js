import React from 'react';
import CommonTab from './CommonTab';
import { action } from '@storybook/addon-actions';

const DEFAULT_TAB_LIST = [
  {
    text: 'Tab1',
    key: 'tab1',
  },
  {
    text: 'Tab2',
    key: 'tab2',
  },
  {
    text: 'Tab3',
    key: 'tab3',
  },
];
const TabContent = () => (
  <div style={{ background: '#f2f4f6' }}>Tab Contents Container</div>
);

export default {
  title: 'components/common/CommonTab',
  argTypes: {
    defaultTab: {
      description: 'Default active tab info',
      table: {
        type: {
          summary: 'object',
          detail: '{text: "tab name", key: "tab key"}',
        },
      },
    },
    tabList: {
      description: 'Tab list',
      table: {
        type: {
          summary: 'object array',
          detail: '{text: "tab name", key: "tab key"}',
        },
      },
    },
    onChange: {
      description: 'An event handler that fires when a user clicks a tab',
      table: {
        type: {
          summary: 'function',
        },
      },
    },
  },
  args: {
    defaultTab: DEFAULT_TAB_LIST[0],
    tabList: DEFAULT_TAB_LIST,
    onChange: action('onChange'),
  },
};

const Template = (args) => (
  <CommonTab {...args}>
    <TabContent />
  </CommonTab>
);

export const Playground = Template.bind({});

export const Default = Template.bind({});
Default.argTypes = {
  defaultTab: { table: { disable: true } },
  tabList: { table: { disable: true } },
  onChange: { table: { disable: true } },
};
