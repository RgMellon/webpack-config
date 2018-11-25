const produto = {
    nome : 'Caneta preta',
    preco : '9.90',
    desconto : '0.05'
}

function clone(objeto) {
  return { ...objeto}
}

let novo = clone(produto);
novo.nome = 'Caneta Azul';

console.log(produto, novo);