// Código em inglês

// 1º Sempre use variáveis, tabelas no banco, comentários e tudo que tange o código em inglês
// 2º Código que não está em inglês não é um código acessível


// import { useState } from "react"

// export function ListProduto() {
//   const [filteredProdutos, setFilteredProdutos] = useState([])

//   function searchProduto(search) {
//     const filtrado = productList.filter(product => product.title.includes(search))

//     setFilteredProdutos(filtrado)
//   }

//   return (
//     <div>
//       <input type="text" onChange={(e) => searchProduto(e.target.value)} />

//       {filteredProdutos.map(produto => (
//         <div>
//           <p>{produto.title}</p>
//           <p>{produto.price}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

import { useState } from "react"

export function ListProduct() {
  const [filteredProducts, setFilteredProducts] = useState([])

  function searchProduct(search) {
    const filteredProduct = productList.filter(product => product.title.includes(search))

    setFilteredProducts(filteredProduct)
  }

  return (
    <div>
      <input type="text" onChange={(e) => searchProduct(e.target.value)} />

      {filteredProducts.map(product => (
        <div>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}