export const modificationCategory = (item: Catalogs[], id: string) => {
  const data = item.filter(i => i.categoryId.toString() === id);
  return data[0];
};
