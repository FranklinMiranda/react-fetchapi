import React from 'react';
import Data from './FetchAPIData';
import AxiosData from './AsyncAwaitData'
import Hooks from './Hooks'

class App extends React.Component {
  render() {
    return <div className="App">
        <Data/>
        <AxiosData/>
        <Hooks/>
    </div>;
  }
}

export default App;


