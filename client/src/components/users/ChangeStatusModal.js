import React, { useMemo, useState } from 'react';
import { Modal } from 'antd';

const ChangeStatusModal = ({ visible, onChangeVisible, status }) => {
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      onChangeVisible(false);
      setConfirmLoading(false);
    }, 1000);
  };

  const handleCancel = () => {
    onChangeVisible(false);
  };

  const content = useMemo(() => {
    if (status === 'active') return 'Deactivate this user?';
    return 'Activate this user?';
  }, [status]);

  return (
    <>
      <Modal
        title="Change Status"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}>
        <p>{content}</p>
      </Modal>
    </>
  );
};

export default ChangeStatusModal;
