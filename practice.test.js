import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from './practice.js';

test('capitalize: hello to Hello', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('reverseString: world to dlrow', () => {
  expect(reverseString('world')).toBe('dlrow');
});

test('calculator has addition: 2 + 3 = 5', () => {
  expect(new calculator().add(2, 3)).toBe(5);
});

test('calculator has subtract: 9 - 2 = 7', () => {
  expect(new calculator().subtract(9, 2)).toBe(7);
});

test('calculator has divide: 10 / 2 = 5', () => {
  expect(new calculator().divide(10, 2)).toBe(5);
});

test('calculator has multiply: 8 * 8 = 64', () => {
  expect(new calculator().multiply(8, 8)).toBe(64);
});

test('caesarCipher works minimally: [abc] to [cde]', () => {
  expect(caesarCipher('abc', 2)).toBe('cde');
});

test('caesarCipher works: [xyz] to [abc]', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('caesarCipher loops with Upper Case: [XYZ] to [ABC]', () => {
  expect(caesarCipher('XYZ', 3)).toBe('ABC');
});

test('caesarCipher preserves case: [HeLLo] to [KhOOr]', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('caesarCipher preserves punctuation: [Hello, World!] to [Khoor, Zruog!]', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('analzyeArray returns average', () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object.average).toBe(4);
});

test('analzyeArray returns min', () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object.min).toBe(1);
});

test('analzyeArray returns max', () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object.max).toBe(8);
});

test('analzyeArray returns length', () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object.length).toBe(6);
});
