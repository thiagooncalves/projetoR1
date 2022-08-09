import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Bagagem } from '../src/components/Bagagem.jsx';
import '../src/components/estilos.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'


const App = () => {

  const [opcoes, setOpcoes] = useState('➥');

  const chooseOption = () => {
   setOpcoes('➥ Orlando, Nova York, Montreal, Vancouver, Cidade do México, Caribe ou qualquer país da América do Sul.');
  }; 
  
  const [quantidade10, setQuantidade10] = useState(0);
  const [quantidade23, setQuantidade23] = useState(0);
  const [preco, setPreco] = useState(0);
  
  const addSuitcase10 = () => {
    setQuantidade10(quantidade10 + 1)
  };

  const lessSuitcase10 = () => {
    if(quantidade10 == 0) {
      return
    }
    setQuantidade10(quantidade10 - 1)
  };

  const addSuitcase23 = () => {
    setQuantidade23(quantidade23 + 1)
  };

  const lessSuitcase23 = () => {
    if(quantidade23 == 0) {
      return
    }
    setQuantidade23(quantidade23 - 1)
  };

  // const somaPreco = () => {
  //   setPreco((100 * quantidade10) + (230 * quantidade23))
  // };

  useEffect (() => {setPreco((100 * quantidade10) + (230 * quantidade23))} , [quantidade10 , quantidade23])

   return (
     <>
      <div className='container__principal'>
        <Header />
        Olá Dev, qual será o seu próximo destino? As suas opções serão de acordo com a sua elegibilidade.
        <br />
        <br />
        Clique e veja as suas opções <button className='btn' onClick={chooseOption}>Opções</button>
        <p>{opcoes}</p>
      </div>

      <div className='container__principal'>
        <Bagagem />
        Dev, quantas bagagens levará ao seu destino? (10kg: R$100 | 23kg: R$230)
        <br />
        <h4>➥ Bagagem de 10kg</h4>
        <button className='btn' onClick={addSuitcase10}>+</button>
        <button className='btn'>{quantidade10}</button>
        <button className='btn' onClick={lessSuitcase10}>-</button>

        <h4>➥ Bagagem de 23kg</h4>
        <button className='btn' onClick={addSuitcase23}>+</button>
        <button className='btn'>{quantidade23}</button>
        <button className='btn' onClick={lessSuitcase23}>-</button>
        <br />
        <br />
        Preço total das bagagens <button className='btn'>R$ {preco}</button>
      </div>
    </>
    )
}

export default App;