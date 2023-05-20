class SessionController {

    async store(req,res){
        res.render('./Tela\ Login/LoginRegister');
    }

    async initial(req,res){
        res.render('./Main/initial');
    }

    async meuperfil(req,res){
        res.render('./Configuracao\ Perfil/ConfiguracoesPerfilUsuario');
    }

    async meusDados(req,res){
        res.render('/partials/FormularioCadastroPerfil');
    }

    async cadastroProfissonal(req,res){
        res.render('./Configuracao\ Perfil/ConfiguracoesPerfilUsuarioProfissional');
    }

    async cadastroFinanceiro(req,res){
        res.render('./Configuracao\ Perfil/ConfiguracoesPerfilUsuarioFinanceiro');
    }

    async dashboard(req,res){
        res.render('./Main/initial');
    }

    async receitas(req,res){
        res.render('./Receitas/CadastroReceitas');
    }

    async despesas(req,res){
        res.render('./Despesas/CadastroDespesas');
    }

    async CadastroCartaoDeCredito(req,res){
        res.render('./Cartao\ de\ Crédito/CadastroCartaoDeCrédito');
    }

    async CadastroContaBancaria(req,res){
        res.render('./Conta\ Bancaria/CadastroContaBancaria');
    }
    async EditarReceitas(req,res){
        res.render('./Receitas/UpdateReceitas');
    }
    async EditarDespesas(req,res){
        res.render('./Despesas/UpdateDespesas');
    }
    async EditarCartaoDeCredito(req,res){
        res.render('./Cartao\ de\ Crédito/UpdateCartaoDeCredito');
    }
    async EditarContaBancaria(req,res){
        res.render('./Conta\ Bancaria/UpdateContaBancaria');
    }
    async transacoes(req,res){
        res.render('./Transacoes/Transacoes');
    }
    async transferencia(req,res){
        res.render('./Transferencias/Transferencias');
    }

}

export default new SessionController();