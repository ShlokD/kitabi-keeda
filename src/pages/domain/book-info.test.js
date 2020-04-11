import transformBookInfo from "./book-info";

describe("Transform Book Info", () => {
    let actual;
    let expected;

    it("transforms book info correctly", () => {
        actual = transformBookInfo({});
        expected = {};
        expect(actual).toEqual(expected);
    });
});