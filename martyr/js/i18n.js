var I18N = {
  'numberToString': function (num) {
  return ('' + num).split('')
    .map(function (c) { return '〇一二三四五六七八九'[c]; }).join('');
  },
  'tileText': function (value) {
    var text = "幼儿小学初中高中学士硕士博士博后博导壮士烈士呵呵呵呵呵呵呵呵呵呵";
    var log2 = function (n) {
      var ret = 0;
      while (n > 2) ret=ret+2, n >>= 1; return ret; //ret++
    }
    return text[log2(value)] + text[log2(value)+1] || '';
  },
  'won': '这么厉害一看就没有女盆友！',
  'lose': '同志继续努力！',
}
 