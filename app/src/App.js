import React, { Component } from 'react';

//Components
import Header from './component/headerComponent/header'
import Footer from './component/footerComponent/footer'
import ProfilePage from './component/pages/profilePage'

//Includes

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <ProfilePage />

        <Footer />

      </div>
    );
  }
}

export default App;
