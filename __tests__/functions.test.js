const { sumArray, countWords, findMax, isDivisible } = require("../functions");

describe("sums numbers in an array", () => {
    test.each`
        numbers                     | expected
        ${[1, 2, 3, 4, 5, 6]}       | ${21}
        ${[-1, -2, -3, -4, -5, -6]} | ${-21}
        ${[]}                       | ${0}
        ${[1, 2, 3, 0, 4, 5, 6]}    | ${21}
    `("$numbers -> $expected", ({ numbers, expected }) => {
        expect(sumArray(numbers)).toBe(expected);
    });
});

// Para este ejercicio investigué un poco y descubrí test.each (investigué aquí entre otros sitios)
/* https://dev.to/bgord/simplify-repetitive-jest-test-cases-with-test-each-310m#:~:text=%E2%80%A2%20Oct%2021%20'20,Antonio%20Luis%20Rom%C3%A1n */

describe("counts words in a sentence", () => {
    it("should count words in a normal sentence: 6", () => {
        expect(countWords("Hola mundo esto es una prueba")).toBe(6);
    });

    it("should count words without padding spaces: 6", () => {
        expect(countWords(" Hola mundo esto es una prueba ")).toBe(6);
    });

    it("should count 0 words", () => {
        expect(countWords("")).toBe(0);
    });

    it("should count words in a sentence without extra-spaces: 6", () => {
        expect(countWords(" Hola   mundo   esto  es   una  prueba")).toBe(6);
    });
});

describe("finds the largest number in an array", () => {
    it("should find the largest positive number in an array: 10", () => {
        expect(findMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(10);
    });

    it("should find the largest negative number in an array: -1", () => {
        expect(findMax([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10])).toBe(-1);
    });

    it("should return null", () => {
        expect(findMax([])).toBe(null);
    });

    it("should return 2", () => {
        expect(findMax([2, 2, 2, 2, 2, 2, 2, 2, 2])).toBe(2);
    });
});

describe("verifies numbers are divisible by another", () => {
    test.each`
        number | divisor | expected
        ${6}   | ${2}    | ${true}
        ${6}   | ${5}    | ${false}
        ${3}   | ${0}    | ${"No se puede dividir entre cero"}
        ${-6}  | ${2}    | ${true}
    `("$number / $divisor -> $expected", ({ number, divisor, expected }) => {
        expect(isDivisible(number, divisor)).toBe(expected);
    });
});
