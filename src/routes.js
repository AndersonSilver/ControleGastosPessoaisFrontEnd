import { Router } from "express";

const app = new Router();

import SessionController from "./Controllers/SessionController";

app.get('/login', SessionController.store);
app.get('/initial/:id', SessionController.initial);
app.get('/meuperfil', SessionController.meuperfil);
app.get('/meusdados', SessionController.meusDados);
app.get('/cadastroProfissional', SessionController.cadastroProfissonal);
app.get('/cadastroFinanceiro', SessionController.cadastroFinanceiro);
app.get('/dashboard', SessionController.dashboard);
app.get('/receitas', SessionController.receitas);
app.get('/despesas', SessionController.despesas);
app.get('/CadastroCartaoDeCredito', SessionController.CadastroCartaoDeCredito);
app.get('/CadastroContaBancaria', SessionController.CadastroContaBancaria);
app.get('/EditarReceitas', SessionController.EditarReceitas);
app.get('/EditarDespesas', SessionController.EditarDespesas);
app.get('/EditarCartaoDeCredito', SessionController.EditarCartaoDeCredito);

export default app;