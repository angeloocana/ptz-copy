"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getCopy;
function getCopy(object) {
    return JSON.parse(JSON.stringify(object));
}