export const handleAggregatingChange = (e: React.ChangeEvent<HTMLInputElement>, items: string[], itemsArray: (value: any) => void) => {
  const value = e.target.value;
  if (items.includes(value)) {
    itemsArray(items.filter((item) => item !== value));
  } else {
    itemsArray([...items, value]);
  }
};
