const { sumArray, countWords } = require("../functions");

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
