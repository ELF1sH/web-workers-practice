export const goThroughArray = (arr: number[]) => {
  let counter = 0;

  arr.forEach((item) => {
    for (let i = 0; i < item; i++) {
      counter++;
    }
  })

  return {
    average: counter / arr.length,
    inputArr: arr,
  };
}
