export const cId = (path: string) => {
  const pathnames = path.split(/[/\s]/).filter(x => x);
  const id = pathnames[pathnames.length - 1];
  return id;
};
