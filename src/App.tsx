import React, { useEffect } from 'react';
import { PaymentSDK } from 'sdktest';

const App: React.FC = () => {

  useEffect(() => {
    // Define an async function within the useEffect hook
    const fetchUSDValue = async () => {
      const sdk = new PaymentSDK({
        apiKey: '4dC35FVfY53mWa7vYZScs1K0FVyVcAK31D0zbWCM',
        environment: 'production',  // Or 'sandbox'
      });

      sdk.getConfig();

      try {
        const quote = await sdk.getUSDValue("SOL", 1);
        console.log('QUOTE IS: ', quote);
      } catch (error) {
        console.error("Error fetching USD value:", error);
      }
    };

    fetchUSDValue();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Testing App</h1>
      </header>
    </div>
  );
};

export default App;
