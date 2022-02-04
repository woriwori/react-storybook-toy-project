import React, { useState } from 'react';
import { Button } from 'antd';
import ChangeStatusModal from '@/users/ChangeStatusModal';

const ActionButtons = ({ status }) => {
  const [showChangeStatusModal, setShowChangeStatusModal] = useState(false);

  return (
    <div>
      <Button type="default" onClick={() => setShowChangeStatusModal(true)}>
        Deactivate
      </Button>
      <ChangeStatusModal
        visible={showChangeStatusModal}
        onChangeVisible={(visible) => setShowChangeStatusModal(visible)}
        status={status}
      />
    </div>
  );
};

export default ActionButtons;
