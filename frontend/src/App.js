import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <Router>
      <Fragment>
        <Header />

        <main className='py-3'>
          <Container>
            <Route path='/login' component={LoginScreen}></Route>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/product/:id' component={ProductScreen} exact />
            <Route path='/cart/:id?' component={CartScreen} />
          </Container>
        </main>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
