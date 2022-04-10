import { useState } from 'react';
import MuiListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import EditIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from './styles';
import { listItemPropTypes } from './propTypes';

const ListItem = ({ selected, onSelected, text, secondaryText }) => {
  const [checked, setChecked] = useState(selected);

  const handleChecked = ({ target }) => {
    setChecked(target.checked);
    onSelected && onSelected(target.checked);
  };
  return (
    <MuiListItem
      secondaryAction={
        <Box sx={{ display: 'flex' }}>
          <ListItemButton sx={styles.listItemButton}>
            <EditIcon />
          </ListItemButton>
          <ListItemButton sx={styles.listItemButton}>
            <DeleteIcon />
          </ListItemButton>
        </Box>
      }
      sx={styles.checked[checked].listItem}
    >
      <ListItemIcon>
        <Checkbox onChange={handleChecked} checked={checked} />
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography sx={styles.checked[checked].primaryListText}>
            {text}
          </Typography>
        }
        secondary={
          <Typography sx={styles.checked[checked].secondaryListText}>
            {secondaryText}
          </Typography>
        }
      />
    </MuiListItem>
  );
};

ListItem.propTypes = listItemPropTypes;
ListItem.defaultProps = {
  selected: false,
  onSelected: () => {},
  text: '',
  secondaryText: '',
};

export default ListItem;
