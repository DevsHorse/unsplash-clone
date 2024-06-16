export const calcInitialGrid = (width: number): number => {
  if (width <= 768) return 1;
  if (width <= 1024) return 2;
  return 3;
};
