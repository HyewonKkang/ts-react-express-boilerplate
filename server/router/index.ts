import { Router } from 'express';

const indexRouter = Router();

indexRouter.get('/', (req, res) => {
  res.send({ test: 'hi' });
});

export default indexRouter;
