const dayjs = require("dayjs");

function hello() {
  const today = dayjs().format();
  console.log("hello world, today is " + today);
}

module.exports = {
  hello,
};
