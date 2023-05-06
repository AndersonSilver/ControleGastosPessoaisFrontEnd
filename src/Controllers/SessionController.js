class SessionController {

    async store(req,res){
        res.render('LoginRegister');
    }

    async initial(req,res){
        res.render('initial');
    }

    async meuperfil(req,res){
        res.render('ConfiguracoesPerfilUsuario');
    }

    async meusDados(req,res){
        res.render('/partials/FormularioCadastroPerfil');
    }

    async cadastroProfissonal(req,res){
        res.render('ConfiguracoesPerfilUsuarioProfissional');
    }

    async cadastroFinanceiro(req,res){
        res.render('ConfiguracoesPerfilUsuarioFinanceiro');
    }

    async dashboard(req,res){
        res.render('initial');
    }

    async receitas(req,res){
        res.render('CadastroReceitas');
    }

    async despesas(req,res){
        res.render('CadastroDespesas');
    }

    async CadastroCartaoDeCredito(req,res){
        res.render('CadastroCartaoDeCrédito');
    }

    async CadastroContaBancaria(req,res){
        res.render('CadastroContaBancaria');
    }
    async EditarReceitas(req,res){
        res.render('UpdateReceitas');
    }
    async EditarDespesas(req,res){
        res.render('UpdateDespesas');
    }

}

export default new SessionController();