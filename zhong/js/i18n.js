var I18N = {
  'numberToString': function (num) {
  return ('' + num).split('')
    .map(function (c) { return '〇一二三四五六七八九'[c]; }).join('');
  },
  'tileText': function (value) {
    var text = " 甲乙丙丁戊己庚辛壬癸终天地人和一二三";
    var log2 = function (n) {
      var ret = 0;
      while (n > 1) ret++, n >>= 1; return ret;
    }
    return text[log2(value)] || '';
  },
  'won': '胜利！',
  'lose': '失败……',
}
 