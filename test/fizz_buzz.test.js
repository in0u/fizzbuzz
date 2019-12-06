/* eslint-env mocha */
const assert = chai.assert;

suite("FizzBuzzTest", () => {
  suite("数を文字列にして返す", () => {
    test("1なら１を文字列で返す", () => {
      assert.equal("1", fizzBuzz(1));
    });
    test("2なら2を文字列で返す", () => {
      assert.equal("2", fizzBuzz(2));
    });
    test("３なら文字列のFizzを返す", () => {
      assert.equal("Fizz", fizzBuzz(3));
    });
    test("5ならば文字列Buzzを返す", () => {
      assert.equal("Buzz", fizzBuzz(5));
    });
    test("15なら文字列のFizzBuzzを返す", () => {
      assert.equal("FizzBuzz", fizzBuzz(15));
    });
    suite("1から100までを返す", () => {
      test("1ならば文字の1を返す", () => {
        const result = generateList();
        assert.equal(1, result[0]);
      });
      test("2なら文字列のFizzを返す", () => {
        const result = generateList();
        assert.equal("Fizz", result[2]);
      });
      test("14ならFizzBuzzを返す", () => {
        const result = generateList();
        assert.equal("FizzBuzz", result[14]);
      });
      test("９９なら100を返す", () => {
        const result = generateList();
        assert.equal("Buzz", result[99]);
      });
    });
  });
});

const FIZZ = "Fizz";
const BUZZ = "Buzz";

function fizzBuzz(number) {
  const isFizz = number % 3 === 0;
  const isBuzz = number % 5 === 0;

  if (isFizz && isBuzz) return FIZZ + BUZZ;
  if (isFizz) return FIZZ;
  if (isBuzz) return BUZZ;
  return number.toString();
}

function generateList() {
  let result = [];
  for (let i = 0; i < 100; i++) {
    result[i] = fizzBuzz(i + 1);
  }
  return result;
}
