import React, { Component } from 'react';

//Components
import Header from './component/headerComponent/header'
import Footer from './component/footerComponent/footer'

//Includes

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Footer />

      </div>
    );
  }
}

export default App;
