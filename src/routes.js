import { Router } from "express";

const app = new Router();

import SessionController from "./Controllers/SessionController";

app.get('/login', SessionController.store);
app.get('/initial/:id', SessionController.initial);

export default app;