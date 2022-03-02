const ftoc = function(fh) {
  let result = (fh - 32) * 5/9;
  return parseFloat(result.toFixed(1), 1);
};

const ctof = function(celc) {
  let result = (celc * 9/5) + 32
  return parseFloat(result.toFixed(1), 1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
