export const createArrayFromObj = <T extends string | number>(
  array: T[] | undefined,
) => {
  if (array) {
    const newArray = array.map(item => ({
      choose: false,
      id: item.toString(),
      name: item.toString(),
    }));
    return newArray;
  }
  return [];
};
