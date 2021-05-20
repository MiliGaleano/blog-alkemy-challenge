import React from 'react'
import {Route, BrowserRouter, Redirect} from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
import Create from './pages/create'
import Edit from './pages/edit'
import Login from './pages/login'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route path='/' exact>
        <Home/>
      </Route>
      <Route path='/detail' exact>
        <Redirect to='/' />
      </Route>
      <Route path='/detail/:id'>
        <Detail />
      </Route>
      <Route path='/edit' exact>
        <Redirect to='/' />
      </Route>
      <Route path='/edit/:id' exact>
        <Edit />
      </Route>
      <Route path='/create' exact>
        <Create />
      </Route>
      <Route path='/login' exact>
        <Login />
      </Route>
    </BrowserRouter>
  )
}

export default App
