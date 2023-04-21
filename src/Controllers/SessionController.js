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

}

export default new SessionController();