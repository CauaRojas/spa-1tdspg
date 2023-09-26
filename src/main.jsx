import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import EditarProdutos from './routes/EditarProdutos.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Produtos from './routes/Produtos.jsx'
import App from './App'
import ExcluirProdutos from './routes/ExcluirProdutos.jsx'
import AddProduto from './routes/AddProduto'
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/produtos', element: <Produtos /> },
            { path: '/editar/produto/:id', element: <EditarProdutos /> },
            { path: '/excluir/produto/:id', element: <ExcluirProdutos /> },
            { path: '/add/produto', element: <AddProduto /> },
        ],
        errorElement: <Error />,
    },
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
