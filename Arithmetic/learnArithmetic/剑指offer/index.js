/**
 * 把数字翻译成字符串
 */

function parseNumToStr(num) {
  var map = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let strNum = String(num)
  if (!strNum) {
    return 0;
  }
  let count = 0;
  function parseItem(str, arr) {
    if (!str) {
      ++count
      return;
    }
    let str1 = map[str[0]]
    let str2 = map[str[0] + str[1]]
    let arr1 = arr.slice()
    arr1.push(str1)
    parseItem(str.slice(1), arr1)
    if (str2) {
      let arr2 = arr.slice()
      arr2.push(str2)
      parseItem(str.slice(2), arr2)
    }

  }
  parseItem(strNum, [])
  return count;
}

console.log(parseNumToStr(25))
