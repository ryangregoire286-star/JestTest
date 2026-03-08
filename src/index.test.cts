import {test, expect } from "@jest/globals";
import {add} from "./AddNumbers.cjs";

test("adds 1 + 10 = 11", () => {
  expect(add(1, 10)).toBe(11);
})
