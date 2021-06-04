import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './contacts/Contacts';
import NavBar from './nav-bar/NavBar';
import Product from './product/Product';
import Products from './products/Products';
import Vision from './vision/Vision';

function App() {
  return (
    <Router>
      <header>
        <NavBar />
      </header>
      <main className="p-2" style={{ height: 'calc(100vh - 44px)' }}>
        <Switch>
          <Route exact path={['/', '/products']} component={Products} />
          <Route exact path="/products/:id" component={Product} />
          <Route exact path="/vision" component={Vision} />
          <Route exact path="/contacts" component={Contacts} />
        </Switch>
      </main>
    </Router>
  );
}
export default App;
