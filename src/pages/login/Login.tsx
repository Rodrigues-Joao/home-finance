import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Button from '../../components/button/Button'

import './login.scss'

function Login()
{
  return (
    <>
      <Header />
      
      <div id="card">
        <div className="login">
            <div className="card-title">
              <h3>Acesse</h3>
            </div>
          <form action="">
            <p>E-mail</p>
            <input type="text" />
            <p>Senha</p>
            <input type="password" />
          <div className='forgot-password'>
            <a>Esqueci minha senha</a>
          </div>
           <Button type="submit">Entrar</Button>
          </form>
        </div>
        <div className="create-account">
          <h3>Não tem uma conta?</h3>
          <p>Crie a sua conta já</p>
          <Button type="submit">Criar conta</Button>
        </div>
        </div>
      <Footer />
    </>
  )
}

export default Login