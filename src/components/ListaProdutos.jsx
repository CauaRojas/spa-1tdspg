export const listaProdutos = [
    {
        id: 1,
        nome: 'Produto 1',
        desc: 'Descrição do produto 1',
        preco: 100,
        img: `https://picsum.photos/seed/produto1/200/300`,
    },
    {
        id: 2,
        nome: 'Produto 2',
        desc: 'Descrição do produto 2',
        preco: 200,
        img: `https://picsum.photos/seed/produto2/200/300`,
    },
    {
        id: 3,
        nome: 'Produto 3',
        desc: 'Descrição do produto 3',
        preco: 300,
        img: `https://picsum.photos/seed/produto3/200/300`,
    },
    {
        id: 4,
        nome: 'Produto 4',
        desc: 'Descrição do produto 4',
        preco: 400,
        img: `https://picsum.photos/seed/produto4/200/300`,
    },
]
export const getProdutoById = id => {
    return listaProdutos.find(produto => produto.id === parseInt(id))
}
