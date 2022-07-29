import "./styles.css"
import React from 'react';
// onclick={} 

function Login() {
    return (
        <>
            <header>
                <div className="log-container">
                    <h1 className="welcome">WELCOME</h1>
                    <input className="retangulo1"/>
                    <input className="retangulo2"/>
                    <br />
                    <a href={"."}><p className="redfSenha">Esqueceu sua senha?</p></a>
                    <a href="http://localhost:5173/Tela1">
                    <button type="button" className="btn-entrar"> 
                        <p className="entrar">ENTRAR</p>
                    </button>
                    </a>
                </div>
            </header>
        </>
    )
}

export default Login;