import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Button } from '../index';
import styles from './styles';
import { deleteItemModalPropTypes } from './propTypes';

const DeleteModal = ({ open, onClose, onConfirm }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={styles.deleteModalContainerStyles}>
        <Box>
          <Typography sx={styles.deleteModalHeaderTextStyles}>
            Delete Item?
          </Typography>
          <Typography sx={styles.deleteModalMessageTextStyles}>
            Are you sure you want to delete this item? This can not be undone.
          </Typography>
        </Box>
        <Box sx={styles.deleteModalFooterStyles}>
          <Button variant="text" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onConfirm}>Delete</Button>
        </Box>
      </Box>
    </Modal>
  );
};

DeleteModal.defaultProps = {
  open: false,
  onClose: () => {},
  onConfirm: () => {},
};
DeleteModal.propTypes = deleteItemModalPropTypes;

export default DeleteModal;
