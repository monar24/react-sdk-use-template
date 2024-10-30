import React, { useEffect } from 'react';
import { SDK } from 'sdktest';

const App: React.FC = () => {
  useEffect(() => {
    const sdk = new SDK({ apiKey: 'my-secret-api-key', environment: 'production' });

    sdk.getConfig();        
    sdk.greetUser("User#001"); 
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from React App</h1>
      </header>
    </div>
  );
};

export default App;
