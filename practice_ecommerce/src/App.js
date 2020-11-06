import './styles/App.scss';

import { connect } from 'react-redux'

import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink, 
} from "react-router-dom";


import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import HomePage from './components/pages/HomePage';
import Products from './components/pages/Products';
import ProductPage from './components/pages/ProductPage';
import Page404 from './components/pages/Page404';

// actions
import {currentItem} from './redux/actions/actions';


const routes = [
  <NavLink exact className='nav' activeClassName="selected" to="/">Home</NavLink>,
  <NavLink exact className='nav' activeClassName="selected" to="/products">Products</NavLink>
]


function App(props) {
  
  return (
    <div className="App">
    <Router >
        <ScrollToTop />
          <Header routes={routes}/>
              <Switch>
                {/* <Route component={} path='/category' />
                <Route component={} path='/category/:category_id' />
                 */}

                <Route exact component={()=> <ProductPage item={props.currentlyViewedItem}/> } path={`/products/:${props.currentlyViewedItem.id}`} />
                <Route component={Products} path='/products' />
                <Route component={() => <HomePage /> } path="/home"/>
                <Route exact component={() => <HomePage /> } path="/"/>
                <Route component={Page404} />
              </Switch>
        <Footer />
      </Router>
    </div>
  );
}


const mapStateToProps = state => {
  return { currentlyViewedItem: state.currentlyViewedItem };
};

export default connect(
  mapStateToProps,
  { 
    currentItem
  }
  )(App)

                {/* <Route component={() => <About width={width} />} path="/about" />
                <Route component={Services} path="/services" />
                <Route component={() => <Appointment width={width} />} path="/appointment" />
                <Route component={Trainers} path="/trainers" /> */}