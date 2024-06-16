const createFilledArray = <T>(count: number, callback: () => T): T[] => {
  return new Array(count).fill('').map(callback);
};

export default createFilledArray;
