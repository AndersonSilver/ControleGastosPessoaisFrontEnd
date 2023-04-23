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

}

export default new SessionController();