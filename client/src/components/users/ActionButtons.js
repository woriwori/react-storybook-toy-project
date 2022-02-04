import React, { useMemo, useState } from 'react';
import { Button } from 'antd';
import ChangeStatusModal from '@/users/ChangeStatusModal';

const ActionButtons = ({ status }) => {
  const [showChangeStatusModal, setShowChangeStatusModal] = useState(false);

  const statusChangeButtonText = useMemo(
    () => (status === 'active' ? 'Deactivate' : 'Activate'),
    [status]
  );

  return (
    <div>
      <Button type="default" onClick={() => setShowChangeStatusModal(true)}>
        {statusChangeButtonText}
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
