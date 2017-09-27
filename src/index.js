module.exports = function multiply(first, second) {
  a = first.split('');
  b = second.split('');
  var tempArr = [];
  for (var i = a.length - 1; i >= 0; i--) {

    for (var j = b.length - 1; j >= 0; j--) {
      if (tempArr[j] == null) {

        tempArr[j] = 0;

      }
      var summ = a[i] * b[j];
      //console.log(summ); 
      tempArr[j] += summ;
    }

    tempArr.unshift(0);
  }
  tempArr.shift();

  for (var i = tempArr.length - 1; i > 0; i--) {
    var k = i - 1;
    if (tempArr[i] >= 10) {

      if (tempArr[k] == null) {
        tempArr[k] = 0;
      }
      var check = parseInt(tempArr[i] / 10);
      tempArr[k] += check;

      tempArr[i] %= 10;
    }
  }
  result = tempArr.join('');

  return result;
}