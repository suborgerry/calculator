import '../styles/App.css';
import React, { useState } from 'react';
import ProviderList from './ProviderList';
import providerArr from '../providerArray';

function App() {
  const [storageCount, setStorageCount] = useState(0);
  const [transferCount, setTransferCount] = useState(0);

  // Handle functions
  const handleStorage = e => {
    let count = e.target.value;
    setStorageCount(Number(count));
  }

  const handleTransfer = e => {
    let count = e.target.value;
    setTransferCount(Number(count));
  }

  return (
    <div className="App">
      <div className='inputs'>
        <div className="inputs-item">
          <h3>{"Storage: " + storageCount + "GB"}</h3>
          <input type="range" name="cowbell" min="0" defaultValue={0} max="1000" step="1" onChange={handleStorage} />
        </div>
        <div className="inputs-item">
          <h3>{"Transfer: " + transferCount + "GB"}</h3>
          <input type="range" name="cowbell" min="0" defaultValue={0} max="1000" step="1" onChange={handleTransfer} />
        </div>
      </div>
      <div className='strings'>
        <ProviderList
          storageCount={storageCount}
          transferCount={transferCount}
          providerArr={providerArr()} />
      </div>
    </div>
  );
}

export default App;
