import { codeBlock } from 'common-tags';

export const mapDeclarativeExample = codeBlock`
  // Array of numbers
  const numbers = [1, 2, 3];

  // A function that multiplies numbers by two
  const multiplyByTwo = x => x * 2;

  return numbers.map(multiplyByTwo);
`;

export const mapImperativeExample = codeBlock`
  // Array of numbers
  const numbers = [1, 2, 3];

  // A function that multiplies numbers by two
  const multiplyByTwo = x => x * 2;

  // An empty array...
  const multipliedNumbers = [];

  // A for loop...
  for (let i = 0; i < numbers.length; i++) {
    multipliedNumbers.push(multiplyByTwo(numbers[i]));
  }

  // Now we return it
  return multipliedNumbers;
`;
