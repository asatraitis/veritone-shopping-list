import { APP_BAR_COLOR, TEXT_ABS_BLACK } from '../../common/colors';

export const spinnerStyles = { color: APP_BAR_COLOR };
export const shoppingListContainerList = {
  display: 'flex',
  alignIntems: 'center',
  justifyContent: 'center',
};
export const itemListStyles = {
  itemListContainerStyles: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 11,
    paddingTop: 4.5,
  },
  itemListHeaderStyles: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end',
    marginBottom: 1.5,
  },
  itemListTextStyles: {
    color: TEXT_ABS_BLACK,
    fontFamily: 'Nunito',
    fontSize: 18,
    fontWeight: 600,
  },
  itemListUlStyles: {
    display: 'flex',
    flexDirection: 'column',
  },
};
