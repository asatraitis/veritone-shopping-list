import {
  MODAL_HEADER_LIGHT_BLUE,
  BORDER_LIGHT_BLUE,
  MODAL_HEADER_TEXT,
  ICON_DARK_BLUE,
  TEXT_BLACK,
  INPUT_TEXT,
  APP_BAR_COLOR,
} from '../../common/colors';

const itemModalContainerStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 560,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderBottom: `5px solid ${APP_BAR_COLOR}`,
};

const itemModalHeaderStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: MODAL_HEADER_LIGHT_BLUE,
  color: MODAL_HEADER_TEXT,
  paddingY: 2,
  paddingLeft: 4,
  paddingRight: 3.25,
  textTransform: 'uppercase',
  letterSpacing: '0.25px',
  fontSize: 18,
  fontWeight: 600,
  borderBottom: `1px solid ${BORDER_LIGHT_BLUE}`,
};

const itemModalHeaderIconStyles = { color: ICON_DARK_BLUE };

const itemModalPaddingStyles = {
  paddingY: 2,
  paddingLeft: 4,
  paddingRight: 3.25,
};

const itemModalPrimaryTextStyles = {
  fontFamily: 'Nunito',
  fontSize: 18,
  fontWeight: 400,
  color: TEXT_BLACK,
  lineHeight: '24px',
};

const itemModalSecondaryTextStyles = {
  fontFamily: 'Nunito',
  fontSize: 16,
  fontWeight: 400,
  color: MODAL_HEADER_TEXT,
  lineHeight: '22px',
};

const itemModalInputText = { color: INPUT_TEXT };

const itemModalFooterStyles = {
  display: 'flex',
  justifyContent: 'end',
  paddingY: 2,
  paddingLeft: 4,
  paddingRight: 3.25,
  gap: 3,
};

const itemModalCheckbox = {
  ...itemModalInputText,
  marginTop: 1.7,
};

export default {
  itemModalContainerStyles,
  itemModalHeaderStyles,
  itemModalHeaderIconStyles,
  itemModalPaddingStyles,
  itemModalPrimaryTextStyles,
  itemModalSecondaryTextStyles,
  itemModalInputText,
  itemModalFooterStyles,
  itemModalCheckbox,
};
