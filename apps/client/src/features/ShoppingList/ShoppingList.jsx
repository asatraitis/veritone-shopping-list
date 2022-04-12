import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { itemsSelector } from './itemsSlice';
import EmptyList from './EmptyList';
import Spinner from './Spinner';
import ItemList from './ItemList';
import { shoppingListContainerList } from './styles';
import { ItemModal, DeleteModal } from '../../components';
import useItemDelete from './useItemDelete';
import useItemCreateOrEdit from './useItemCreateOrEdit';
import useItemsFetch from './useItemsFetch';

const ShoppingList = () => {
  const {
    items,
    currentItem,
    isLoading,
    itemOperation,
    currentItemValidations,
  } = useSelector(itemsSelector);

  useItemsFetch();

  const [
    isOpenDelete,
    { handleConfirmDelete, handleDeleteItem, handleDeleteModalClose },
  ] = useItemDelete();

  const [
    isOpenAddItem,
    {
      closeAddItem,
      handleAddItem,
      handleItemSave,
      handleAddItemChange,
      handleSelectItem,
      handleEditItem,
    },
  ] = useItemCreateOrEdit();

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
        validations={currentItemValidations}
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
