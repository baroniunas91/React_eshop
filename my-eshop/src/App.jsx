import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './contacts/Contacts';
import NavBar from './nav-bar/NavBar';
import Product from './products/components/Product';
import Products from './products/Products';
import Vision from './vision/Vision';

function App() {
  return (
    <Router>
    <header>
      <NavBar />
    </header>
    <main className="p-2">
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/vision">
          <Vision />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
      </Switch>
    </main>
    </Router>
  );
}
export default App;