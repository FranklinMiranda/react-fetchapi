import React from 'react';
import '../CSS/Data.css'

// API endpoint URL https://jsonplaceholder.typicode.com/users

class Data extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // Lifecycle Method ComponentDidMount is used to execute fetch when the Data Component is first rendered
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          items: data,
          DataisLoaded: true,
        });
      });
  }

  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1>Please wait some more time....</h1>
        </div>
      );

    return (
      <div className="Data">
        <h1>Fetch data from an API in React</h1>
        {items.map((item) => (
          <ol key={item.id}>
            User_Name: {item.username}
            Full_Name: {item.name}
            User_Email: {item.email}
          </ol>
        ))}
      </div>
    );
  }
}

export default Data 
