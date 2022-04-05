import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import './home.scss'

function Home()
{
  return (
    <>
      <Header />
      <div className="containerHome">
        <div className="totalCard">
          <p>R$ </p>
          <p>100,00</p>
        </div>
        <div className="filterMethods">
          <div className="itemFiltered">
            <input type="checkbox" />
            <p>Nubank</p>
          </div>
          <div className="itemFiltered">
            <input type="checkbox" />
            <p>C6 Bank</p>
          </div>
          <div className="itemFiltered">
            <input type="checkbox" />
            <p>Débito</p>
          </div>
        </div>
        <div id="separator"></div>
        <div className="debitCard">

          <h2>Útimos gastos:</h2>
          <div className="item">
            <div>
              <p id="date">Segunda, 21 de Março</p>
              <p id="title">Mercado</p>
              <p id="paymentType">Crédito</p>
            </div>
            <p id="value">R$ 10,00</p>
          </div>
          <div className="item">
            <div>
              <p id="date">Segunda, 21 de Março</p>
              <p id="title">Mercado</p>
              <p id="paymentType">Crédito</p>
            </div>
            <p id="value">R$ 10,00</p>
          </div>
          <div className="item">
            <div>
              <p id="date">Segunda, 21 de Março</p>
              <p id="title">Mercado</p>
              <p id="paymentType">Crédito</p>
            </div>
            <p id="value">R$ 10,00</p>
          </div>
          <div className="item">
            <div>
              <p id="date">Segunda, 21 de Março</p>
              <p id="title">Mercado</p>
              <p id="paymentType">Crédito</p>
            </div>
            <p id="value">R$ 10,00</p>
          </div>
          <div className="item">
            <div>
              <p id="date">Segunda, 21 de Março</p>
              <p id="title">Mercado</p>
              <p id="paymentType">Crédito</p>
            </div>
            <p id="value">R$ 10,00</p>
          </div>


        </div>
      </div>
      <Footer />
    </>

  )
}

export default Home