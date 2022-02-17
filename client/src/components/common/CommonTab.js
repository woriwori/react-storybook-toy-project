import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Tabs } from 'antd';

const StyledCommonTab = styled.div`
  .ant-tabs-nav-list {
    width: 100%;
    & > .ant-tabs-tab {
      flex: 1;
      & > .ant-tabs-tab-btn {
        flex: 1;
        text-align: center;
      }
    }
  }
  .ant-tabs-nav-operations {
    display: none;
  }
`;
const { TabPane } = Tabs;

const CommonTab = ({
  defaultTab = { text: '', key: '' },
  tabList = [],
  onChange,
  children,
}) => {
  const onChangeHandler = useCallback(
    (selectedKey) => {
      onChange(tabList.find(({ key }) => key === selectedKey));
    },
    [onChange]
  );

  return (
    <StyledCommonTab>
      <Tabs
        type="card"
        defaultActiveKey={defaultTab.key}
        onChange={onChangeHandler}>
        {tabList.map(({ text, key }) => (
          <TabPane tab={text} key={key}>
            {children}
          </TabPane>
        ))}
      </Tabs>
    </StyledCommonTab>
  );
};

const TabType = PropTypes.shape({
  text: PropTypes.string,
  key: PropTypes.string,
});

CommonTab.propTypes = {
  defaultTab: TabType,
  tabList: PropTypes.arrayOf(TabType),
  onChange: PropTypes.func,
  children: PropTypes.element,
};

export default CommonTab;
