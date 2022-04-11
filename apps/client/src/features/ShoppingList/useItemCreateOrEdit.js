import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  editCurrentItem,
  itemsSelector,
  resetCurrentitem,
  selectItem,
  updateCurrentItem,
} from './itemsSlice';
import { createItem, editItem } from './reducers/extraReducers';

const useItemCreateOrEdit = () => {
  const { currentItem, itemOperation } = useSelector(itemsSelector);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const closeAddItem = () => {
    setOpen(false);
    dispatch(resetCurrentitem());
  };
  const handleAddItem = () => {
    setOpen(true);
  };
  const handleItemSave = () => {
    if (itemOperation === 'add') {
      dispatch(createItem(currentItem));
    } else {
      dispatch(editItem(currentItem));
    }
    closeAddItem();
  };
  const handleAddItemChange = e => {
    const { value, name, checked } = e.target;
    const payload =
      name === 'completed' ? { value: checked, name } : { value, name };
    dispatch(updateCurrentItem(payload));
  };
  const handleSelectItem = ({ target }, id) => {
    const { checked } = target;
    dispatch(selectItem({ id, checked }));
    dispatch(editItem({ id, completed: checked }));
  };
  const handleEditItem = id => {
    setOpen(true);
    dispatch(editCurrentItem(id));
  };

  return [
    open,
    {
      closeAddItem,
      handleAddItem,
      handleItemSave,
      handleAddItemChange,
      handleSelectItem,
      handleEditItem,
    },
  ];
};

export default useItemCreateOrEdit;
