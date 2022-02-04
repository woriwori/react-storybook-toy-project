import React, { useCallback, useState } from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const CommonTab = ({ activeTab, tabList = [], onChange, children }) => {
  const onChangeHandler = useCallback(
    (selectedKey) => {
      onChange(tabList.find(({ key }) => key === selectedKey));
    },
    [onChange]
  );

  return (
    <Tabs defaultActiveKey={activeTab} onChange={onChangeHandler}>
      {tabList.map(({ text, key }) => (
        <TabPane tab={text} key={key}>
          {children}
        </TabPane>
      ))}
    </Tabs>
  );
};

export default CommonTab;
