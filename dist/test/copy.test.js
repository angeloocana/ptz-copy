"use strict";

var _copy = require("../copy");

var _copy2 = _interopRequireDefault(_copy);

var _ptzAssert = require("ptz-assert");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Copy", function () {
    it("Simple object", function () {
        var expected = { a: "b" };
        var actual = (0, _copy2.default)(expected);
        (0, _ptzAssert.notOk)(actual == expected, "Using same memory reference");
        (0, _ptzAssert.deepEqual)(actual, expected);
    });
    it("Array", function () {
        var expected = [0, 2, 3];
        var actual = (0, _copy2.default)(expected);
        (0, _ptzAssert.notOk)(actual == expected, "Using same memory reference");
        (0, _ptzAssert.deepEqual)(actual, expected);
    });
});