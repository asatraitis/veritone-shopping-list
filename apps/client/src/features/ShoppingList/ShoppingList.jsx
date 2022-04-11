import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import {
  itemsSelector,
  updateCurrentItem,
  resetCurrentitem,
  selectItem,
  editCurrentItem,
} from './itemsSlice';
import EmptyList from './EmptyList';
import Spinner from './Spinner';
import ItemList from './ItemList';
import { shoppingListContainerList } from './styles';
import {
  getItems,
  createItem,
  editItem,
  deleteItem,
} from './reducers/extraReducers';
import { ItemModal, DeleteModal } from '../../components';

const ShoppingList = () => {
  const { items, currentItem, isLoading, itemOperation } =
    useSelector(itemsSelector);
  const dispatch = useDispatch();

  // DELETE MODAL
  const [isOpenDelete, setOpenDelete] = useState(false);
  const handleDeleteModalClose = () => {
    setOpenDelete(false);
    dispatch(resetCurrentitem());
  };
  const handleDeleteItem = id => {
    dispatch(editCurrentItem(id));
    setOpenDelete(true);
  };
  const handleConfirmDelete = () => {
    dispatch(deleteItem(currentItem));
    handleDeleteModalClose();
  };

  //

  const [isOpenAddItem, setAddItem] = useState(false);
  const closeAddItem = () => {
    setAddItem(false);
    dispatch(resetCurrentitem());
  };
  const handleAddItem = () => {
    setAddItem(true);
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
    setAddItem(true);
    dispatch(editCurrentItem(id));
  };

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  useEffect(() => {
    console.log(currentItem);
  }, [currentItem]);

  return (
    <Box className="shopping-list-container" sx={shoppingListContainerList}>
      <EmptyList show={!items.length && !isLoading} onAddItem={handleAddItem} />
      <Spinner show={isLoading} />
      <ItemList
        show={!!items.length && !isLoading}
        items={items}
        onAddItem={handleAddItem}
        onEditItem={handleEditItem}
        onSelectItem={handleSelectItem}
        onDeleteItem={handleDeleteItem}
      />
      <ItemModal
        variant={itemOperation}
        open={isOpenAddItem}
        onClose={closeAddItem}
        item={currentItem}
        onFieldUpdate={handleAddItemChange}
        onSave={handleItemSave}
      />
      <DeleteModal
        open={isOpenDelete}
        onClose={handleDeleteModalClose}
        onConfirm={handleConfirmDelete}
      />
    </Box>
  );
};

export default ShoppingList;
