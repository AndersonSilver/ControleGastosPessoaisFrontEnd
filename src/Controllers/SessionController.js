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
}

export default new SessionController();