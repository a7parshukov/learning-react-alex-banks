import { sum } from "./functions";

test("1 + 2 equal 3", () => {
  // eslint-disable-next-line jest/valid-expect
  expect(sum(1, 2).toBe(3))
})