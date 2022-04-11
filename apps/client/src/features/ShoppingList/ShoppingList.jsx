import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import {
  itemsSelector,
  updateCurrentItem,
  resetCurrentitem,
} from './itemsSlice';
import EmptyList from './EmptyList';
import Spinner from './Spinner';
import ItemList from './ItemList';
import { shoppingListContainerList } from './styles';
import { getItems, createItem } from './reducers/extraReducers';
import { ItemModal } from '../../components';

const ShoppingList = () => {
  const { items, currentItem, isLoading } = useSelector(itemsSelector);
  const dispatch = useDispatch();

  const [isOpenAddItem, setAddItem] = useState(false);
  const closeAddItem = () => {
    setAddItem(false);
    dispatch(resetCurrentitem());
  };
  const handleAddItem = () => {
    setAddItem(true);
  };
  const handleAddItemChange = e => {
    const { value, name } = e.target;
    const payload = { value, name };
    dispatch(updateCurrentItem(payload));
  };
  const handleCreateItem = () => {
    dispatch(createItem(currentItem));
    closeAddItem();
  };

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <Box className="shopping-list-container" sx={shoppingListContainerList}>
      <EmptyList show={!items.length && !isLoading} onAddItem={handleAddItem} />
      <Spinner show={isLoading} />
      <ItemList
        show={items.length && !isLoading}
        items={items}
        onAddItem={handleAddItem}
      />

      <ItemModal
        open={isOpenAddItem}
        onClose={closeAddItem}
        item={currentItem}
        onFieldUpdate={handleAddItemChange}
        onSave={handleCreateItem}
      />
    </Box>
  );
};

export default ShoppingList;
