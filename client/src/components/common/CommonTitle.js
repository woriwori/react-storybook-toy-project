import React from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';

const StyledCommonTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > h1 {
    margin: 1.5em;
  }
`;
const StyledIconComponent = styled.div`
  font-size: 30px;
  margin-right: 10px;
`;

const { Title } = Typography;

const CommonTitle = ({
  text,
  IconComponent = null,
  IconComponentProps = {},
}) => {
  return (
    <StyledCommonTitle>
      {IconComponent && (
        <StyledIconComponent>
          <IconComponent {...IconComponentProps} />
        </StyledIconComponent>
      )}
      <Title>{text}</Title>
    </StyledCommonTitle>
  );
};

export default CommonTitle;
