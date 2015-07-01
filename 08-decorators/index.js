
var koa = require('koa');
var escape = require('escape-html');

var app = module.exports = koa();

app.use(function* (next) {
  yield next;
  // add some logic here!
  this.response.body = escape(this.state.text);
})

app.use(function* body() {
  this.state.text = 'this following HTML should be escaped: <p>hi!</p>';
});
