import React, { Fragment } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Fragment>
      <Header />
      <Container>
        <main className='py-3'>
          <h1>welcome</h1>
        </main>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default App;
