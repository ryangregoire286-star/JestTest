"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var globals_1 = require("@jest/globals");
var AddNumbers_1 = require("./AddNumbers");
(0, globals_1.test)("adds 1 + 10 = 11", function () {
    (0, globals_1.expect)((0, AddNumbers_1.add)(1, 10)).toBe(11);
});
