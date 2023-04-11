import { Router } from 'express';

const app = new Router();

app.get('/teste', (req, res) => {
  res.render('home');
});

export default app;
