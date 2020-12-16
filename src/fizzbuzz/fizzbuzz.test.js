const fizzbuzz = require("./fizzbuzz");

describe("FizzBuzz Puzzle", () => {
  test('Se não for múltipo de 3 ou de 5 retorne ele mesmo', () => {
   const resultado = fizzbuzz(0);
   expect(resultado).toEqual(0);
  });

  test('Deve retornar 7 quando passado 7', () => {
    const resultado = fizzbuzz(7);
    expect(resultado).toEqual(7);
   });

   test('Deve retornar Fizz quando passado 3', () => {
    const resultado = fizzbuzz(3);
    expect(resultado).toEqual("Fizz");
   });

   test('Deve retornar Buzz quando passado 5', () => {
    const resultado = fizzbuzz(5);
    expect(resultado).toEqual("Buzz");
   });

   test('Deve retornar Buzz quando passado 10', () => {
    const resultado = fizzbuzz(10);
    expect(resultado).toEqual("Buzz");
   });

   test('Deve retornar fizzbuzz quando passado 15', () => {
    const resultado = fizzbuzz(15);
    expect(resultado).toEqual("FizzBuzz");
   });
});