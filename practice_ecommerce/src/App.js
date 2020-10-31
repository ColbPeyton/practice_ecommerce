import './styles/App.scss';

import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Page404 from './components/Page404';

const routes = [
  <NavLink exact className='nav' activeClassName="selected" to="/">Home</NavLink>
]


function App() {
  return (
    <div className="App">
    <Router >
        <ScrollToTop />
          <Header routes={routes}/>
              <Switch>
                {/* <Route component={() => <About width={width} />} path="/about" />
                <Route component={Services} path="/services" />
                <Route component={() => <Appointment width={width} />} path="/appointment" />
                <Route component={Trainers} path="/trainers" /> */}
                <Route exact component={() => <HomePage /> } path="/"/>
                <Route component={Page404} />
              </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
