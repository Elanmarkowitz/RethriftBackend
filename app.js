var koa = require('koa');
var db = require('./platform/db');
var mw = require('./lib/middlewares');
var co = require('co');

const router = new mw.router();

var app = new koa();
//app.use(mw.router());
app.use(mw.bodyParser());

router.post('/users', async (next) => {
  next.body = "hi user";
  console.log(next.request.body);
});

router.get('/', function *() {
  this.body = "hello world";
})

app.use(router.routes());

app.use(function *(){
  var url = this.request.url;
  this.body = "hello world";
});

co(function *(){
  var connection = null;
})

console.log("server online");
app.listen(3000);
