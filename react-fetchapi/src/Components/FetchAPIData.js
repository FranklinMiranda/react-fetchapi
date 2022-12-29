import React from 'react';
import '../CSS/Data.css';

// API endpoint URL https://jsonplaceholder.typicode.com/users
// This is a  boilerplate for importing Data using Fetch API and a JSON API

class Data extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: '',
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
          <div key={item.id}>
            <h1>{item.name}</h1>
            <ol>
              <li> User_Name: {item.username}</li>
              <li> Email: {item.email}</li>
              <li> Phone: {item.phone}</li>
              <li> City: {item.address.city}</li>
              <li> Zip Code: {item.address.zipcode}</li>
              <li> Company: {item.company.name}</li>
              <li> Business: {item.company.bs}</li>
            </ol>
          </div>
        ))}
      </div>
    );
  }
}

export default Data;
