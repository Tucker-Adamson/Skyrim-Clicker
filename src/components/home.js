import React, { Component } from 'react';

import Header from './header';
import Card from './card';
import Generate from './generate';

class Home extends Component {
  render() {
    return (
      <div className="home">
        { Header() }
        <Generate />
      </div>
    );
  }
}

// things we need to fix

// content labels
// generate btn space/card-height

export default Home;