import {expect, jest, test} from '@jest/globals';
import Team from "../class/Team";

test('team add test', () => {
  const result = new Team();

  expect(result.add('Max')).toEqual(new Set(['Max']));
  expect(() => result.add('Max')).toThrow(new Error('Такой персонаж уже существует'));
});

test('team addAll test', () => {
  const result = new Team();

  expect(result.addAll(['Max', 'Ivan', 'Max'])).toEqual(new Set(['Max', 'Ivan']));
});

test('team toArray test', () => {
  const result = new Team();

  result.addAll(['Max', 'Ivan', 'Max'])
  expect(result.toArray()).toEqual(['Max', 'Ivan']);
});