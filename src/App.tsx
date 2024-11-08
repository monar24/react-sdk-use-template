import React, { useEffect } from 'react';

const App: React.FC = () => {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Testing App</h1>

        <iframe
          src="http://localhost:5173"
          width="100%"
          height="600px"
          frameBorder="0"
        />

      </header>
    </div>
  );
};

export default App;
