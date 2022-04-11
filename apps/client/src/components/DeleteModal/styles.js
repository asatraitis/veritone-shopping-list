import { TEXT_BLACK, MODAL_HEADER_TEXT } from '../../common/colors';

const deleteModalContainerStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  maxWidth: 362,
  height: 176,
  p: 4,
  borderRadius: 1,
  boxShadow: 24,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const deleteModalHeaderTextStyles = {
  fontFamily: 'Nunito',
  fontSize: 18,
  fontWeight: 600,
  lineHeight: '24px',
  color: TEXT_BLACK,
  marginBottom: 1.5,
};

const deleteModalMessageTextStyles = {
  fontFamily: 'Nunito',
  fontSize: 14,
  fontWeight: 400,
  lineHeight: '20px',
  color: MODAL_HEADER_TEXT,
};

const deleteModalFooterStyles = {
  display: 'flex',
  justifyContent: 'end',
  gap: 2,
};

export default {
  deleteModalContainerStyles,
  deleteModalHeaderTextStyles,
  deleteModalMessageTextStyles,
  deleteModalFooterStyles,
};
