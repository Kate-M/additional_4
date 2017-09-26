module.exports = function multiply(first, second) {
  if (parseInt(first) == 0 || parseInt(second) == 0) {
    return '0';
  }

  first = first.split('').reverse();
  second = second.split('').reverse();
  var result = [];

  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.length; j++) {
      if (!result[i + j]) {
        result[i + j] = 0;
      }

      result[i + j] += first[i] * second[j];
    }
  }

  for (var i = 0; i < result.length; i++) {
    if (result[i] >= 10) {
      if (!result[i + 1]) {
        result[i + 1] = 0;
      }

      result[i + 1] += parseInt(result[i] / 10);
      result[i] %= 10;
    }
  }

  return result.reverse().join('');
}
