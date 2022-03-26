import './login.scss'

function Login()
{
  return (
    <div id="login-card">
      <form action="">
        <p>E-mail ou CPF</p>
        <input type="text" />
        <p>Senha</p>
        <input type="password" />
      </form>
      <p>Esqueci minha senha</p>
    </div>
  )
}

export default Login