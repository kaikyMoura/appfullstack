import "./styles.css"
import Header from '../Header/index'

function Login() {
    return (
        <>
        <Header />
            <input id="retangulo1" type="nome">
                </input>
            <input id="retangulo2" type="senha" />
            <br/>
            <p className="redfSenha">Esqueceu sua senha?</p>
        </>
    )
}

export default Login;