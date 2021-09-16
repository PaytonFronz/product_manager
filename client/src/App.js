import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AllProducts from './views/AllProducts';
import NewProduct from './views/NewProduct';
import SingleProduct from './views/SingleProduct';
import EditProduct from './views/Update';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
      <Route exact path = "/">
        <NewProduct />
        <AllProducts />
      </Route>

      <Route exact path = "/">
        <AllProducts />
      </Route>

      <Route exact path ="/products/:_id">
        <SingleProduct />
      </Route>

      <Route exact path ="/products/:_id/update">
        <EditProduct/>
      </Route>

    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
