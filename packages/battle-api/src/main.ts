import Koa from 'koa';
import Router from '@koa/router';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import { RegisterRoutes } from './generated/routes';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(cors());
RegisterRoutes(router);

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
