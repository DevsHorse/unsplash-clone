export const recalculateColumns = (
  width: number,
  currentColumnsCount: number
): number | null => {
  let newCount: number | null = null;

  if (width > 1024 && currentColumnsCount < 3) {
    newCount = 3;
  }
  if (width > 768 && width <= 1024 && currentColumnsCount !== 2) {
    newCount = 2;
  }
  if (width <= 768 && currentColumnsCount !== 1) {
    newCount = 1;
  }
  return newCount;
};
