import { ChangeSignCommand } from './ChangeSIgnCommand';

test('Test for change sign', () => {
  expect(new ChangeSignCommand(2).execute()).toBe('-2');
});

test('Test for return change sign', () => {
  expect(new ChangeSignCommand(2).redo(-2)).toBe(2);
});
