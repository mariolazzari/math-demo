const math = require("mathjs");

function print(value) {
  const precision = 14;
  console.log(math.format(value, precision));
}

// demo
const runDemo = () => {
  console.log("\nBASIC demo:");

  // functions and constants
  print(math.round(math.e, 3)); // 2.718
  print(math.atan2(3, -3) / math.pi); // 0.75
  print(math.log(10000, 10)); // 4
  print(math.sqrt(-4)); // 2i
  print(
    math.pow(
      [
        [-1, 2],
        [3, 1],
      ],
      2
    )
  ); // [[7, 0], [0, 7]]
  print(math.derivative("x^2 + x", "x")); // 2 * x + 1

  // expressions
  print(math.evaluate("12 / (2.3 + 0.7)")); // 4
  print(math.evaluate("12.7 cm to inch")); // 5 inch
  print(math.evaluate("9 / 3 + 2i")); // 3 + 2i
  print(math.evaluate("det([-1, 2; 3, 1])")); // -7

  // chained operations
  const a = math.chain(3).add(4).multiply(2).done();
  print(a); // 14
};

module.exports = { runDemo };
