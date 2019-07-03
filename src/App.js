/* ******************************
CODIGO APENAS PARA ESTUDO
****************************** */
import React, { useState, useEffect } from 'react';
import './App.css';

// Lista usada no exemplo de interação #2
const listaDeObjetos = [
  {nome:'beltrano'}, 
  {nome:'fulano'}, 
  {nome:'cicrano'}
];

function App() {

  /* ******************************
  ✅ Alterando e incrementando textos usando useState
  ******************************* */
  // inicia com uma valor padrão;
  const [text, setText] = useState('Olá mundo'); 
  const [count, setCount] = useState(0);
  const [itens, addItem] = useState(listaDeObjetos);


  function alterandoTexto(e) {
    // 👍 Alterou o texto.
    setText(e.target.value);
  }

  function contadorDeClick() {
    // 👍 ta contando.
    setCount(count + 1)
  }

  function adicioinandoObjeto() {
    // 👍 adicioinando um objeto a lista com o que foi digitado no txtExemplo.
    //addItem([...listaDeObjetos, {nome:text}]);
    addItem(itens.concat({nome:text}));
  }

  /* ******************************
  ✅ Disparando o useEffect cada vez que o state é alterado. 
  ******************************* */
  useEffect(() => {
    console.log(`Você entrou com o texto ${text} e clicou no botao ${count}x`)
    console.log(`Sua lista possui: ${itens.length} itens`)
  });

  return (
    <div className="App">
      <div className="App-body">
        <h3>Alterando o texto e contando com useState </h3>
        <div>
          <input id="txtExemplo" className="App-textbox" onChange={alterandoTexto} placeholder="Digite qualquer coisa" value={text} />
          <br/> 
          {text}
        </div>
        <div>
          <button id="btnContar" className="App-button" onClick={contadorDeClick.bind(this)}>
            Contar {count}
         </button>
        </div>
        <div>
          <button id="btnAdicionar" className="App-button"  onClick={adicioinandoObjeto.bind(this)}>
            Adicionar esse item a lista: {text}
         </button>
         <ul >
            {
              itens.map(item => <li className="App-li">{item.nome}</li>)
            }
         </ul>
        </div>
      </div>
      
    </div>
  );
}

export default App;
