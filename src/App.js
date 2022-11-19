import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component/Header';
import Banner from './component/Banner';
import Body from './component/Body';
import Tickets from './component/Tickets';
import Bookv from './component/Bookv';
import Footer from './component/Footer';

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Switch>
          <Route path="/venue">
            <div className='app_page'>
              <Bookv/>
            </div>
          </Route>
          <Route path="/">
            <div className='app_page'>
            <Banner />
            <Body />
              <Tickets />
              </div>
          </Route>
        </Switch>
        <Footer/>
      </Router>
   </div>
  );
}

export default App;
