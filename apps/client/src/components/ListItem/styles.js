import {
  BORDER_LIGHT_BLUE,
  ICON_DARK_BLUE,
  TEXT_DARK_GREY,
  BACKGROUND_LIGHT_BLUE,
  APP_BAR_COLOR,
} from '../../common/colors';

// ListItem
const listItemStyles = {
  borderRadius: 1,
  border: 1,
};
const defaultListItemStyles = {
  ...listItemStyles,
  borderColor: BORDER_LIGHT_BLUE,
};
const selectedListItemStyles = {
  ...listItemStyles,
  backgroundColor: BACKGROUND_LIGHT_BLUE,
  borderColor: BACKGROUND_LIGHT_BLUE,
};

// ListItemText
const primaryListItemTextStyles = {
  fontWeight: 600,
  fontFamily: 'Nunito',
};
const selectedPrimaryListItemTextStyles = {
  ...primaryListItemTextStyles,
  textDecoration: 'line-through',
  color: APP_BAR_COLOR,
};
const secondaryListItemTextStyles = {
  fontFamily: 'Nunito',
  fontSize: 14,
  color: TEXT_DARK_GREY,
  fontWeight: 600,
};
const selectedSecondaryListItemTextStyles = {
  ...secondaryListItemTextStyles,
  textDecoration: 'line-through',
};

// ListItemButton
const listItemButtonStyles = { paddingX: 0.5, color: ICON_DARK_BLUE };

const styles = {
  checked: {
    true: {
      listItem: selectedListItemStyles,
      primaryListText: selectedPrimaryListItemTextStyles,
      secondaryListText: selectedSecondaryListItemTextStyles,
    },
    false: {
      listItem: defaultListItemStyles,
      primaryListText: primaryListItemTextStyles,
      secondaryListText: secondaryListItemTextStyles,
    },
  },
  listItemButton: listItemButtonStyles,
};

export default styles;
