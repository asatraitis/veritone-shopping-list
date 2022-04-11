import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import LastPageIcon from '@mui/icons-material/LastPage';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button, SelectAmount } from '../index';
import styles from './styles';
import { itemModalPropTypes } from './propTypes';

const variantLabels = {
  primaryButton: {
    add: 'Add Task',
    edit: 'Save Item',
  },
  primaryText: {
    add: 'Add an Item',
    edit: 'Edit an Item',
  },
  secondaryText: {
    add: 'Add your new item below',
    edit: 'Edit your item below',
  },
};

const ItemModal = ({ variant, item, onClose, open, onFieldUpdate, onSave }) => {
  const handleFieldUpdate = e => {
    onFieldUpdate && onFieldUpdate(e);
  };
  return (
    <>
      <Modal open={open} onClose={onClose}>
        <Box sx={styles.itemModalContainerStyles}>
          <Box className="item-modal-header" sx={styles.itemModalHeaderStyles}>
            Shopping List
            <LastPageIcon sx={styles.itemModalHeaderIconStyles} />
          </Box>
          <Box sx={styles.itemModalPaddingStyles}>
            <Typography sx={styles.itemModalPrimaryTextStyles}>
              {variantLabels.primaryText[variant]}
            </Typography>
            <Typography sx={styles.itemModalSecondaryTextStyles}>
              {variantLabels.secondaryText[variant]}
            </Typography>
            <Box sx={{ paddingBottom: 20 }}>
              <TextField
                placeholder="Item name"
                onChange={handleFieldUpdate}
                variant="outlined"
                fullWidth
                value={item.name}
                sx={{ marginTop: 1.7 }}
                inputProps={{
                  sx: styles.itemModalInputText,
                  name: 'name',
                }}
              />
              <TextField
                placeholder="Description"
                variant="outlined"
                fullWidth
                multiline
                rows={7}
                value={item.description}
                onChange={handleFieldUpdate}
                inputProps={{
                  maxLength: 100,
                  sx: styles.itemModalInputText,
                  name: 'description',
                }}
                sx={{ marginTop: 1.7 }}
              />
              <SelectAmount
                onSelect={handleFieldUpdate}
                value={item.amount}
                name="amount"
              />
              {variant === 'edit' ? (
                <FormGroup>
                  <FormControlLabel
                    sx={styles.itemModalCheckbox}
                    control={
                      <Checkbox
                        sx={styles.itemModalInputText}
                        checked={item.completed}
                        onChange={handleFieldUpdate}
                        name="completed"
                      />
                    }
                    label="Purchased"
                  />
                </FormGroup>
              ) : null}
            </Box>
          </Box>
          <Box sx={styles.itemModalFooterStyles}>
            <Button variant="text" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={onSave}>
              {variantLabels.primaryButton[variant]}
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

ItemModal.propTypes = itemModalPropTypes;
ItemModal.defaultProps = {
  variant: 'add',
  item: {
    name: '',
    description: '',
    amount: 0,
    completed: true,
  },
  onClose: () => {},
  onFieldUpdate: () => {},
  onSave: () => {},
  open: false,
};

export default ItemModal;
