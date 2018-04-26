<p style="text-align:center;"><img src="http://7xtxh3.com1.z0.glb.clouddn.com/github/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png"/></p>

# mpx2rem
A mini `px` to `rem` library.

[![npm version](https://img.shields.io/npm/v/mpx2rem.svg)](https://www.npmjs.com/package/mpx2rem)
[![GitHub license](https://img.shields.io/github/license/Hancoson/mpx2rem.svg)](https://github.com/Hancoson/mpx2rem/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dt/mpx2rem.svg)](https://www.npmjs.com/package/mpx2rem)



## Installation

Run `npm i mpx2rem`.

## Usage

```js
require('mpx2rem');
```

or

```js
<script src="./../lib/mpx2rem.min.js"></script>
```

or you can copy `index.min.js` into your HTML template, like:

```html
<script>var mpx2rem=function(e){var t=e.document.documentElement,n=e.devicePixelRatio,i=null;function o(){var e,i=t.getBoundingClientRect().width;1===n&&(i=720),i>720&&(i=720),e=i/7.2,t.style.fontSize=e+"px"}n=n>2?3:n>1?2:1,t.setAttribute("data-dpr",n),e.addEventListener("resize",function(){clearTimeout(i),i=setTimeout(o,200)},!1),o()}(window);</script>
```


## Example

The design is measured at @X2 `720px` wide. Dealing with SASS or LESS like:

```scss
/* SCSS @X2 */
$px: (1/100)+rem;
div {
  width: 200*$px;
  height: 200*$px;
}
```

If the design is measured at @X3 `1080px` wide. 

```scss
/* SCSS @X3 */
$px3: (1/150)+rem;
div {
  width: 300*$px;
  height: 300*$px;
}
```

Compiled into `css`:

```css
div {
  width: 1rem;
  height: 1rem;
}
```
In the end, the `html` is :

![img](http://7xtxh3.com1.z0.glb.clouddn.com/github/WX20180426-091221.png)


## License

MIT