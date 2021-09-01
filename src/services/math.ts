/* eslint-disable no-unused-vars */
export {};

declare global {
  interface Math {
    randomElement(array: any[]): any;
    shuffle(array: any[]): any[];
    randomSample(array:any[], count:number):any[]
  }
  }

Math.randomElement = (array) => array[Math.floor(Math.random() * array.length)];

Math.randomSample = (array, count = 1) => {
  const sampleIndexes = randomInt(array.length, count);
  return sampleIndexes.map((v) => array[v]);
};

const randomBetween = (max, min = 0) => Math.floor(Math.random() * (max - min) + min);

const randomInt = (max, count) => {
  if (max < count) {
    throw new Error(`randomInt: max : ${max} < count :  ${count}`);
  }
  const intArray = Array.from({ length: max }, (v, i) => i);
  const sample : number[] = [];

  for (let i = 0; i < count; i += 1) {
    const index = randomBetween(intArray.length);
    sample.push(intArray[index]);
    intArray.splice(index, 1);
  }

  return sample;
};

Math.shuffle = (array) => {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};
