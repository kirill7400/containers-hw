import {expect, jest, test} from '@jest/globals';
import Settings from "../class/Settings";

test('settings getter test', () => {
  const result = new Settings();

  expect(result.settings).toEqual(new Map([
    ['theme', 'dark'],
    ['music', 'rock'],
    ['difficulty', 'easy']
  ]));
});