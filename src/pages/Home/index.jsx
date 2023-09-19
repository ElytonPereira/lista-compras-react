import { useState } from 'react'
import { useRef } from 'react'
import { v4 } from 'uuid'
import {BsTrash, BsBookmarkCheck, BsBookmarkCheckFill, BsFillBookmarkCheckFill} from 'react-icons/bs'
import{AddButton, Container, Product} from './styles'


function Home() {
  const [produtos, setProdutos] = useState([])

  const inputRef = useRef();

  function deletarProduto(id){
    setProdutos(produtos.filter(produto => produto.id !== id))
  }

  function cliqueiNoBotao(){
    setProdutos([{
      id: v4(),
      nome: inputRef.current.value
    }, ...produtos])
    
    inputRef.current.value =""
  }

  return (

      <Container>
        <h1>Lista de compras</h1>
        <input placeholder="Produto..." ref={inputRef}/>
        <AddButton onClick={cliqueiNoBotao}>Adicionar</AddButton>

        {
          produtos.map((produto) =>(
            <Product key={produto.id}>
              <p>{produto.nome}</p>              
              <BsTrash onClick={() => deletarProduto(produto.id)} />
            </Product>
          ))
        }

      </Container>

  )
}

export default Home
