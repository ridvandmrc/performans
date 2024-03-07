export const LargeData = () => {
  const arr = [...Array.from({ length: 10e5 }).keys()];
  return arr.map((_, index) => ({
    id: index + 1,
    desc: `item is ${index + 1}`,
  }));
};
