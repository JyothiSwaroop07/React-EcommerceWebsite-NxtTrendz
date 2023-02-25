import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'
import Products from './components/Products'
import Cart from './components/Cart'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/products" component={Products} />
    <Route excact path="/cart" component={Cart} />
    <Route component={NotFound} />
  </Switch>
)

export default App
