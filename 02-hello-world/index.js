
var koa = require('koa');

var app = module.exports = koa();

/**
 * Return "hello world" as a string on every request.
 * Hint: this only requires a single line of code.
 */

app.use(function* () {
  this.response.body = 'hello world';
  // following headers are set automatically
  // this.response.set({
  //   'Content-Length': '11',
  //   'Content-Type': 'text/plain; charset=utf-8'
  // });
});
