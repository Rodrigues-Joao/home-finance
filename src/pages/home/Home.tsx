import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import ListItem from '../../components/list-item/ListItem'
import TotalGraphic from '../../components/graphics/TotalGraphic'
import './home.scss'

function Home()
{
  return (
    <>
      <Header />
      <TotalGraphic />
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

          <ListItem title="Mercado" paymentType="Crédito" value="R$ 20,00" date="Quinta-feira, 7 de Abril" />
          <ListItem title="Mercado" paymentType="Débito" value="R$ 120,00" date="Quinta-feira, 7 de Abril" />
          <ListItem title="Mercado" paymentType="Crédito" value="R$ 110,00" date="Quinta-feira, 7 de Abril" />
          <ListItem title="Mercado" paymentType="Débito" value="R$ 103,00" date="Quinta-feira, 7 de Abril" />
          <ListItem title="Mercado" paymentType="Crédito" value="R$ 50,00" date="Quinta-feira, 7 de Abril" />
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Home