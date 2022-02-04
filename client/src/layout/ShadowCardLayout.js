import React from 'react';
import styled from 'styled-components';

const StyledShadowCardLayout = styled.div`
  box-shadow: rgb(65 69 88 / 10%) 0px 7px 14px 0px,
    rgb(0 0 0 / 7%) 0px 3px 6px 0px;
  border-radius: 0.375rem;
  border: 0px solid rgba(0, 0, 0, 0.125);
  padding: 2em;
  background-color: #ffff;
  .ant-table-pagination.ant-pagination {
    margin-bottom: 0;
  }
`;

const ShadowCardLayout = ({ children }) => {
  return <StyledShadowCardLayout>{children}</StyledShadowCardLayout>;
};

export default ShadowCardLayout;
