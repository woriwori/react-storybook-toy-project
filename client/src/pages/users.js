import React from 'react';
import { Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import CommonTitle from '@/CommonTitle';

const TITLE_TEXT = 'Users';
const Users = () => {
  return (
    <div>
      <CommonTitle
        text={TITLE_TEXT}
        IconComponent={UserOutlined}
        IconComponentProps={{ className: 'test' }}
      />
      <Button type="primary">Primary Button</Button>
    </div>
  );
};

export default Users;
