import {expect, jest, test} from '@jest/globals';
import ErrorRepository from "../class/ErrorRepository";

test('error translate test', () => {
  const result = new ErrorRepository();

  expect(result.translate(500)).toBe('Server Error');
  expect(result.translate(700)).toBe('Unknown error');
});