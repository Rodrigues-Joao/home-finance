import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import './login.scss'

function Login()
{
  return (
    <>
      <Header />
      <div id="login-card">
        <form action="">
          <p>E-mail ou CPF</p>
          <input type="text" />
          <p>Senha</p>
          <input type="password" />
        </form>
        <p>Esqueci minha senha</p>
      </div>
      <Footer />
    </>
  )
}

export default Login