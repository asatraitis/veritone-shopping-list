import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getItems } from './reducers/extraReducers';

const useItemsFetch = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);
};

export default useItemsFetch;
