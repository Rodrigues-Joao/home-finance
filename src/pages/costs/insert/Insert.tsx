import './insert.scss'


import Footer from '../../../components/footer/Footer'
import Header from '../../../components/header/Header'
import Select from '../../../components/select/Select'

function Insert()
{
    return (
        
        <>
            <Header />
            <div className="content">
                <div className="form">
                    <h4>Adicionar produto</h4>
                    <form action="">
                        <div className="item">
                            <p>Produto:</p>
                            <input type="text" />
                        </div>
                        <div className="item">
                            <p>Preço:</p>
                            <input type="number" />
                        </div>
                        <div className="item">
                            <p>Categoria:</p>
                            <Select name="product-categories" id="">
                                <option value="1">Mercado</option>
                                <option value="1">Combustível</option>
                                <option value="1">Feira</option>
                                <option value="1">Delivery</option>
                                <option value="1">Manutenção</option>
                            </Select>
                        </div>
                        <div className="item">
                            <p>Cartão:</p>
                            <select name="product-categories" id="">
                                <option value="1">****2725</option>
                                <option value="1">****3574</option>
                            </select>
                        </div>
                        <div className="item">
                            <p>Tipo de pagamento</p>
                            <div className="payments-methods">
                                <input type="radio" />
                                <p>Crédito</p>
                            </div>
                            <div className="payments-methods">
                                <input type="radio" />
                                <p>Débito</p>
                            </div>
                        </div>
                    </form>
                </div>    
            </div>
            <Footer/>
        </>
    )
}

export default Insert