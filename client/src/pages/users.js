import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { UserOutlined, PlusOutlined } from '@ant-design/icons';
import CommonTitle from '@/CommonTitle';

const StyledUsers = styled.div`
  width: 1000px;
  #table-test {
    height: 500px;
    background-color: cornflowerblue;
  }
`;
const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Users = () => {
  const TITLE_TEXT = 'Users';
  return (
    <StyledUsers>
      <StyledHeader>
        <CommonTitle text={TITLE_TEXT} IconComponent={UserOutlined} />
        <Button type="primary" shape="round" icon={<PlusOutlined />}>
          Add
        </Button>
      </StyledHeader>
      <div id="table-test"></div>
    </StyledUsers>
  );
};

export default Users;
