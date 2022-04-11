import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editCurrentItem, itemsSelector, resetCurrentitem } from './itemsSlice';
import { deleteItem } from './reducers/extraReducers';

const useItemDelete = () => {
  const { currentItem } = useSelector(itemsSelector);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleDeleteModalClose = () => {
    setOpen(false);
    dispatch(resetCurrentitem());
  };
  const handleDeleteItem = id => {
    dispatch(editCurrentItem(id));
    setOpen(true);
  };
  const handleConfirmDelete = () => {
    dispatch(deleteItem(currentItem));
    handleDeleteModalClose();
  };

  return [
    open,
    { handleConfirmDelete, handleDeleteItem, handleDeleteModalClose },
  ];
};

export default useItemDelete;
