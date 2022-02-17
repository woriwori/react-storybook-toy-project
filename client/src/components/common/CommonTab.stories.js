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
  title: 'CommonTab',
};

const Template = (args) => (
  <CommonTab tabList={DEFAULT_TAB_LIST} {...args}>
    <TabContent />
  </CommonTab>
);

export const Playground = Template.bind({});
Playground.args = {
  defaultTab: DEFAULT_TAB_LIST[0],
  tabList: DEFAULT_TAB_LIST,
  onChange: action('onChange'),
};

export const Default = Template.bind({ defaultTab: DEFAULT_TAB_LIST[0] });
