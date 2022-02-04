import React from 'react';
import { Table } from 'antd';

const CommonTable = ({ items, columns, maxRowSize }) => {
  return (
    <Table
      dataSource={items}
      columns={columns}
      pagination={{
        position: ['none', 'bottomCenter'],
        pageSize: maxRowSize,
        size: 'default',
      }}
      size="small"
    />
  );
};

export default CommonTable;
