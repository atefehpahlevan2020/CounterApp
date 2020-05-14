import React, { Component } from 'react';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';

class App extends Component {
  store = createStore(reducer)
  render() {
    return (
      <Provider store={this.store}>
        <Counter/>
      </Provider>
    );
  }
}
export default App;
