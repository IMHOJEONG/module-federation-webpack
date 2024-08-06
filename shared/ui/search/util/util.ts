export const generateRandomDates = (): string => {
  return new Date(
    new Date(2024, 7, 19).getTime() +
      Math.random() * (new Date().getTime() - new Date(2024, 7, 19).getTime())
  ).toISOString();
};

export const counter = (initial?: number) => {
  let count = initial || 0;
  return () => {
    count++;
    return count.toString();
  };
};
