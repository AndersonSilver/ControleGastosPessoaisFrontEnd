class SessionController {

    async store(req,res){
        res.render('LoginRegister');
    }

    async initial(req,res){
        res.render('initial');
    }
}

export default new SessionController();