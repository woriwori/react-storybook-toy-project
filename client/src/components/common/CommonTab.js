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
`;
const { TabPane } = Tabs;

const CommonTab = ({ activeTab, tabList = [], onChange, children }) => {
  const onChangeHandler = useCallback(
    (selectedKey) => {
      onChange(tabList.find(({ key }) => key === selectedKey));
    },
    [onChange]
  );

  return (
    <StyledCommonTab>
      <Tabs type="card" defaultActiveKey={activeTab} onChange={onChangeHandler}>
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
  activeTab: TabType,
  tabList: PropTypes.arrayOf(TabType),
  onChange: PropTypes.func,
  children: PropTypes.element,
};

export default CommonTab;
