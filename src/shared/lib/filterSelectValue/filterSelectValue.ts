export const filterSelectValue = <T extends string>(
  items: SelectItems<T>[] | undefined,
  selectValue: string | undefined,
) => {
  if (items && items.length && selectValue) {
    const data = items.filter(item => item.name === selectValue);
    if (data.length) return data[0].name;

    return '';
  }
  return '';
};
