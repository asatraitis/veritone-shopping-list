import { useState } from 'react';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import modalStyles from '../ItemModal/styles';
import { getArrForAmount } from './helper';
import { selectAmountPropTypes } from './propTypes';

const SelectAmount = ({ value, onSelect, amount, error, errorText }) => {
  const [selValue, setValue] = useState(value);
  const handleSelect = e => {
    setValue(e.target.value);
    onSelect && onSelect(e);
  };
  return (
    <FormControl fullWidth sx={{ marginTop: 1.7 }} error={error}>
      <Select
        labelId="item-amount-label"
        id="item-amount-select"
        value={selValue}
        inputProps={{
          sx: modalStyles.itemModalInputText,
          name: 'amount',
        }}
        onChange={handleSelect}
      >
        <MenuItem value={0} disabled>
          How Many?
        </MenuItem>
        {getArrForAmount(amount).map(val => (
          <MenuItem data-field="amount" key={val} value={val}>
            {val}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{errorText}</FormHelperText>
    </FormControl>
  );
};

SelectAmount.defaultProps = {
  value: 0,
  onSelect: () => {},
  amount: 5,
  error: false,
  errorText: '',
};
SelectAmount.propTypes = selectAmountPropTypes;

export default SelectAmount;
