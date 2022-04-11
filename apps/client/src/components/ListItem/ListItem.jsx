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

const ListItem = ({
  selected,
  onSelect,
  text,
  secondaryText,
  onEdit,
  onDelete,
}) => {
  return (
    <MuiListItem
      secondaryAction={
        <Box sx={{ display: 'flex' }}>
          <ListItemButton sx={styles.listItemButton}>
            <EditIcon onClick={onEdit} />
          </ListItemButton>
          <ListItemButton sx={styles.listItemButton}>
            <DeleteIcon onClick={onDelete} />
          </ListItemButton>
        </Box>
      }
      sx={styles.checked[selected].listItem}
    >
      <ListItemIcon>
        <Checkbox onChange={onSelect} checked={selected} />
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography sx={styles.checked[selected].primaryListText}>
            {text}
          </Typography>
        }
        secondary={
          <Typography sx={styles.checked[selected].secondaryListText}>
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
  onSelect: () => {},
  onEdit: () => {},
  onDelete: () => {},
  text: '',
  secondaryText: '',
};

export default ListItem;
