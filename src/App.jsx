import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Layout from './pages/Layout'
import ArticlesDetails from './pages/ArticlesDetails'

function App() {

  const routes =  createBrowserRouter([
    {path:'',element:<Layout></Layout>,children:[
      {index:true,element:<Home></Home>},
      {path:'home',element:<Home></Home>},
      {path:'blog',element:<Blog></Blog>},
      {path:'blog/:slug',element:<ArticlesDetails></ArticlesDetails>},
      {path:'about',element:<About></About>},
      {path:'*',element:<NotFound></NotFound>},
    ]},
  ])

  return (
    <>
     {/* */}

      
      <RouterProvider router={routes}/>
   
    </>
      )
}

      export default App
