import React from 'react';
import CommonTable from './CommonTable';
import { ITEMS, COLUMNS, DEFAULT_ROW_SIZE } from './mock';

export default {
  title: 'components/common/CommonTable',
  argTypes: {
    items: {
      description: 'Table items',
      table: {
        type: { summary: 'object array' },
      },
    },
    columns: {
      description: 'Table column info',
      table: {
        type: {
          summary: 'object array',
          detail:
            '{title: "column name", dataIndex: "mapping key with a item"}',
        },
      },
    },
    maxRowSize: {
      description: 'Max row size',
      table: {
        type: { summary: 'number' },
      },
    },
  },
  args: {
    items: ITEMS,
    columns: COLUMNS,
    maxRowSize: DEFAULT_ROW_SIZE,
  },
};

const Template = (args) => <CommonTable {...args} />;

export const Playground = Template.bind({});

export const Default = Template.bind({});
Default.argTypes = {
  items: { table: { disable: true } },
  columns: { table: { disable: true } },
  maxRowSize: { table: { disable: true } },
};

export const NoData = Template.bind({});
NoData.args = {
  items: [],
};
NoData.argTypes = {
  items: { table: { disable: true } },
  columns: { table: { disable: true } },
  maxRowSize: { table: { disable: true } },
};
