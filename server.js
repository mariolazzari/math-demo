const basic = require("./basic");
const units = require("./units");

try {
  basic.runDemo();
  units.runDemo();
} catch (ex) {
  console.log("ERROR:", ex.message);
}
