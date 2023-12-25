import { CheckBoxesType } from '@/features/ProductFilters';

// export const modifyobjPropertyInArr = <
//   T extends CheckBoxesType[],
//   R extends CheckBoxesType,
// >(
//   array: T,
//   payload: R,
// ) => {
//   const newArray = array.map(item =>
//     item.id !== payload.id ? item : { ...item, choose: !item.choose },
//   );
//   return newArray;
// };

export const getArrayProperty = <T extends CheckBoxesType[]>(array: T) => {
  const newBox = array.filter(i => i.choose).map(e => e.name);
  if (newBox.length) return newBox;
  return undefined;
};

export const getNewFilterValue = <
  T extends CheckBoxesType[],
  R extends CheckBoxesType,
>(
  filterArray: T,
  payload: R,
) => {
  const newItem = filterArray.map(item =>
    item.id !== payload.id ? item : { ...item, choose: !item.choose },
  );
  const selectItem = getArrayProperty(newItem);
  return { newItem, selectItem };
};
