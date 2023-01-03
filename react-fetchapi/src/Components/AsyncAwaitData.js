import React, { useState, useEffect } from 'react';
import axios from 'axios';

// API endpoint URL https://jsonplaceholder.typicode.com/posts/
// This is a boilerplate for fetching Data using Async/Await
// This code also uses React hooks in simple functional components

function AxiosData() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  // useEffect achieves the same result as a lifecycle method
  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);

      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/');

      setPosts(response.data);

      setLoading(false);
    };

    loadPost();
  }, []);

  return  <div className="AxiosData">{loading ? <h4>Loading...</h4> : posts.map((item) => <h4>{item.title}</h4>)}</div>;
}

export default AxiosData;
