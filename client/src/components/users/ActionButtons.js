import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { USER_STATUS } from '@/constants';
import ChangeStatusModal from '@/components/users/ChangeStatusModal';

const ActionButtons = ({ status }) => {
  const [showChangeStatusModal, setShowChangeStatusModal] = useState(false);

  const statusChangeButtonText = useMemo(
    () => (status === USER_STATUS.ACTIVE ? 'Deactivate' : 'Activate'),
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

ActionButtons.propTypes = {
  status: PropTypes.string,
};

export default ActionButtons;
