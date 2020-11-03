import './styles/App.scss';

import { connect } from 'react-redux'

import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink 
} from "react-router-dom";

import {useState, useEffect} from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './components/pages/HomePage';
import Products from './components/pages/Products';
import ProductPage from './components/pages/ProductPage';
import Page404 from './components/pages/Page404';

// Helpers
import {findItem, getIDFromPath, checkIfProductPath} from './_helpers/findItem';

const routes = [
  <NavLink exact className='nav' activeClassName="selected" to="/">Home</NavLink>,
  <NavLink exact className='nav' activeClassName="selected" to="/products">Products</NavLink>
]


function App(props) {

  const [item, setItem] = useState(props.currentItem);

  // Loads path product if it was not set by props.currentItem
  useEffect(()=>{
    const path = getIDFromPath(window.location.href);
    if(checkIfProductPath(window.location.href) && path){
      setItem(findItem(path[0]))
    }else{
      setItem(props.currentItem)
    }
   
  }, [props.currentItem, window.location.href])

  
  return (
    <div className="App">
    <Router >
        {/* <ScrollToTop /> */}
          <Header routes={routes}/>
              <Switch>
                {/* <Route component={} path='/category' />
                <Route component={} path='/category/:category_id' />
                 */}

                 <Route component={()=> <ProductPage item={item}/> } path={`/products/:${item.id}`} />
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
  return { currentItem: state.currentItem };
};

export default connect(mapStateToProps)(App)


                {/* <Route component={() => <About width={width} />} path="/about" />
                <Route component={Services} path="/services" />
                <Route component={() => <Appointment width={width} />} path="/appointment" />
                <Route component={Trainers} path="/trainers" /> */}