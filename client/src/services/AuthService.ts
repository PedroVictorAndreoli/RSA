import { IUsuarioCadastro, IUsuarioLogin, IContaCadastro, IMovimentacaoCadastro } from "@/commons/interfaces";
import { api } from "@/lib/axios";

const publicKey = () => {
    return api.get('/encode');
}

const login = (user: IUsuarioLogin) => {
    return api.post('/login', user);
}

const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(token)}`;
    }
    return token ? true : false;
}

const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
}

const signup = (user: IUsuarioCadastro) => {
    return api.post('/usuarios', user);
}

const cadastroConta = (conta: IContaCadastro) => {
    return api.post('/contas', conta)
}
const cadastroMovimentacao = (conta: IMovimentacaoCadastro) => {
    return api.post('/movimentacoes', conta)
}

const AuthService = {
    login,
    isAuthenticated,
    logout,
    cadastroConta,
    cadastroMovimentacao,
    signup,
    publicKey
}

export default AuthService;