# @jdists/ejs

ejs as jdists processor

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coverage-image]][coverage-url]

* @see [jdists](https://github.com/zswang/jdists)

* @see [ejs](https://github.com/mde/ejs)

## Example

```html
<!--data>
kids:
  - name: Jimmy
    age: '12'
  - name: Sally
    age: '4'
</data-->

<!--jdists encoding="ejs" data="?data"-->
<ul>
<% kids.forEach((item) => { %>
  <li><%= item.name %> - <%= item.age %></li>
<% }) %>
</ul>
<!--/jdists-->

<!--ejs data="?data"-->
<ul>
<% kids.forEach((item) => { %>
  <li><%= item.name %> - <%= item.age %></li>
<% }) %>
</ul>
<!--/ejs-->
```

## License

MIT © [zswang](http://weibo.com/zswang)

[npm-url]: https://badge.fury.io/js/%40jdists%2Fejs
[npm-image]: https://badge.fury.io/js/%40jdists%2Fejs.svg
[travis-url]: https://travis-ci.org/jdists/ejs
[travis-image]: https://travis-ci.org/jdists/ejs.svg?branch=master
[coverage-url]: https://coveralls.io/github/jdists/ejs?branch=master
[coverage-image]: https://coveralls.io/repos/jdists/ejs/badge.svg?branch=master&service=github