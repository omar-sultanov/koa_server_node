var Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const port=3000;

router.get('/', (ctx) => {ctx.body = "<h1>Index sayfasına hoş geldiniz</h1>";});
router.get('/about', (ctx) => {ctx.body = "<h1>Hakkimda sayfasına hoş geldiniz</h1>";});
router.get('/contact', (ctx) => {ctx.body = "<h1>İletişim sayfasına hoş geldiniz</h1>";});
app.use(router.routes()); 

app.listen(port,()=>{
    console.log("KOA sunucumuz çalışıyor");
});