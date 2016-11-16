import copy from "../copy";
import { notOk, deepEqual } from "ptz-assert";

describe("Copy", () => {
    it("Simple object", () => {
        let expected = { a: "b" };
        let actual = copy(expected);

        notOk(actual == expected, "Using same memory reference");
        deepEqual(actual, expected);
    });

    it("Array", () => {
        let expected = [0, 2, 3];
        let actual = copy(expected);

        notOk(actual == expected, "Using same memory reference");
        deepEqual(actual, expected);
    });
});