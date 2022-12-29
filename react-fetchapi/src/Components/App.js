import React from 'react';
// import Data from './FetchAPIData';
// import AxiosData from './AsyncAwaitData'
// import Hooks from './Hooks'
import Message from './UseState';
import Counter from './UseEffect';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Message />
        <Counter />
      </div>
    );
  }
}

export default App;
