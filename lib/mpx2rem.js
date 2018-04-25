/**
 * @Author: Guoxing.han 
 * @Date: 2018-04-25 15:40:21 
 * @version 0.0.1 
 */
var mpx2rem = function (win) {
  var _doc = win.document;
  var _ele = _doc.documentElement;
  var _dpr = win.devicePixelRatio;
  var _timer = null;

  function fun() {
    var _width = _ele.getBoundingClientRect().width;
    var _res = '';
    if (_dpr === 1) {
      _width = 720
    }
    if (_width > 720) _width = 720;//设置基准值的极限值
    _res = _width / 7.2;
    _ele.style.fontSize = _res + "px"
  }

  if (_dpr > 2) {
    _dpr = 3
  } else {
    if (_dpr > 1) {
      _dpr = 2
    } else {
      _dpr = 1
    }
  }
  _ele.setAttribute("data-dpr", _dpr);
  win.addEventListener("resize", function () {
    clearTimeout(_timer);
    _timer = setTimeout(fun, 200)
  }, false);
  fun()
}(window);

// 模块化
if (typeof exports !== 'undefined') {
  if (typeof module !== 'undefined' && module.exports) {
    exports = module.exports = mpx2rem;
  }
  exports.mpx2rem = mpx2rem;
} else {
  window.mpx2rem = mpx2rem;
}