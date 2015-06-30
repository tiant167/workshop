
var koa = require('koa');

var app = module.exports = koa();

app.use(function* () {
  if(this.request.is('json') === false){
    this.response.body = 'ok';
  } else {
    this.response.body = {'message': 'hi!'};
  }
})
