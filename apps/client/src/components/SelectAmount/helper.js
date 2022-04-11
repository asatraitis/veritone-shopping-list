export const getArrForAmount = amount => {
  const arr = [];
  let i = 1;
  while (i <= amount) {
    arr.push(i);
    i++;
  }
  return arr;
};
