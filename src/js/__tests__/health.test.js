import health from '../health';

test('health', () => {
  expect(health({ name: 'Маг', health: 90 })).toBe('healthy');
});
test('health 1', () => {
  expect(health({ name: 'Маг', health: 50 })).toBe('wounded');
});
test('health 2', () => {
  expect(health({ name: 'Маг', health: 45 })).toBe('wounded');
});
test('health 3', () => {
  expect(health({ name: 'Маг', health: 15 })).toBe('wounded');
});
test('health 4', () => {
  expect(health({ name: 'Маг', health: 5 })).toBe('critical');
});
