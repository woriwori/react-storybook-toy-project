import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import { USER_STATUS } from '@/constants';

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
    if (status === USER_STATUS.ACTIVE) return 'Deactivate this user?';
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

ChangeStatusModal.propTypes = {
  visible: PropTypes.bool,
  onChangeVisible: PropTypes.func,
  status: PropTypes.string,
};

export default ChangeStatusModal;
