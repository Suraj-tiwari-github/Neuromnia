import React, { useState } from 'react';

function ChatInterface() {
  const [input, setInput] = useState('');

  const handleInput = event => {
    setInput(event.target.value);
  };

  const handleSubmit = async () => {
    // Logic to send request to backend will go here
    console.log(input);
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInput} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default ChatInterface;
