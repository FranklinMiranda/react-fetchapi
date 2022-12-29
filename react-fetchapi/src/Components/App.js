import React from 'react';
import Data from './FetchAPIData';
import AxiosData from './AsyncAwaitData'

class App extends React.Component {
  render() {
    return <div className="App">
        <Data/>
        <AxiosData/>
    </div>;
  }
}

export default App;


// Exchange Rates Data API : 9JXaVi1QOC15bXiQ0C3bdxVUIDn0CSE4