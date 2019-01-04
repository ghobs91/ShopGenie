import React, { Component } from 'react';
import SearchBar from './SearchBar';
import './LandingPage.css'
class LandingPage extends Component {
  render() {
    return (
      <div className = "landingContainer">
        <SearchBar/>
      </div>
    );
  }
}

export default LandingPage;