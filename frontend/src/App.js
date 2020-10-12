import React, { Fragment } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <Fragment>
      <Header />
      <Container>
        <main className='py-3'>
          <HomeScreen />
        </main>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default App;
