import React, { useState } from 'react';

function Message() {
  const [message, setMessage] = useState('Hello');

  function handleClick() {
    setMessage('Bye');
  }

  return (
    <div className="Message-Div">
      <h1>{message}</h1>
      <button onClick={handleClick}>Change Message</button>
    </div>
  );
}

export default Message;
