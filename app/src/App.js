import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//Components
import Header from './component/headerComponent/header'
import Footer from './component/footerComponent/footer'
import ProfilePage from './component/pages/profilePage'
import BasicInfo from './component/pages/basicInfo'

//Includes
import './Assets/CSS/default.min.css'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />

        <Route exact path='/' component={ProfilePage} />
        <Route exact path='/BasicInfo' component={BasicInfo} />

        <Footer />

      </div>
      </Router>
    );
  }
}

export default App;
