import React from 'react';
import PropTypes from 'prop-types';
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

CommonTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(PropTypes.object),
  maxRowSize: PropTypes.number,
};

export default CommonTable;
