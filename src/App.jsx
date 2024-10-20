import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css'

function App() {

  const [itemList, setItemList] = useState([]);
  const [inputText, setInputText] = useState('');


  //Função para adicionar o Item na lista, função também checa de o usuário deixou o campo em branco e não permite assim a inserção na lista.

  function handleAdicionaItem(){
    const textoSemEspaco = inputText.trim();
    if(textoSemEspaco == ''){

      alert("Não é possivel adicionar uma tarefa em branco")

    } else{

    setItemList([...itemList, inputText]);
    setInputText('');

    }
  }

  // Função para excluir um item da lista

  function handleExcluirItem(item){

    setItemList((prevList) => prevList.filter((lista) => lista != item));
    
  }

  // Função para atrelar a tecla Enter ao botão adicionar, permitindo adicionar uma tarefa pressionando Enter

  function handleKeyDown(e){
    if(e.key === 'Enter'){
      handleAdicionaItem();
    }
  }


  return(

      
    <div className='container'>

      <h1>Lista de Tarefas</h1>

      <div>

      <input type="text" placeholder="Digite a tarefa" onKeyDown={handleKeyDown} value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button className='botaoAddItem' onClick={handleAdicionaItem}>Adicionar</button>

      </div>


      <ul className='lista'>
        {itemList.map((item, i) => (
          <li className='item' key={i}>
            {item} 
            <button className='excluirItem' onClick={() => handleExcluirItem(item)}>X </button>

            </li>
        ))}
      </ul>

    </div>
    

  )
}

export default App
