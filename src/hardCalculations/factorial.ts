export const factorial = (number: number): number => {
  let counter = 0;

  for (let i = 0; i < 10000000000; i++) {
    counter += counter;
  }

  return Array
    .from({length: number}, (_, i) => i + 1)
    .reduce((acc, cur) => acc * cur, 1);
}