import "./styles.css"

function Login() {
    return (
        <>
            <header>
                <div className="log-container">
                    <h1 className="welcome">WELCOME</h1>
                    <input className="retangulo1"/>
                    <input className="retangulo2"/>
                    <br />
                    <p className="redfSenha">Esqueceu sua senha?</p>
                    <button type="button" className="btn-entrar">
                        <p className="entrar">ENTRAR</p>
                    </button>
                </div>
            </header>
        </>
    )
}

export default Login;