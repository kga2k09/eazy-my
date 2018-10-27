import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faPhone, faComments } from '@fortawesome/free-solid-svg-icons';



import './App.css';
import EazyApp from './containers/EazyApp';

class App extends Component {
  
  render() {
    library.add(faEnvelope, faPhone, faComments);
    return (
      <div >
        <EazyApp />
      </div>
    );
  }
}

export default App;
