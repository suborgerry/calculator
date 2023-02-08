import '../styles/App.css';
import React, { useState } from 'react';
import ProviderList from './ProviderList';
import { Title } from './StylingCimoponents';
import providerArr from '../providerArray';

function App() {
  const [storageCount, setStorageCount] = useState(0);
  const [transferCount, setTransferCount] = useState(0);

  // Components

  // Handle functions
  const handleStorage = e => {
    let count = e.target.value;
    setStorageCount(count);
  }

  const handleTransfer = e => {
    let count = e.target.value;
    setTransferCount(count);
  }

  return (
    <div className="App">
      <div className='inputs'>
        <div className="inputs-item">
          <Title text={"Storage: " + storageCount + "GB"} />
          <input type="range" name="cowbell" min="0" defaultValue={0} max="1000" step="1" onChange={handleStorage}/>
        </div>
        <div className="inputs-item">
          <Title text={"Transfer: " + transferCount + "GB"} />
          <input type="range" name="cowbell" min="0" defaultValue={0} max="1000" step="1" onChange={handleTransfer}/>
        </div>
      </div>
      <div className='strings'>
        <ProviderList storageCount={storageCount}
                      transferCount={transferCount}
                      providerArr={providerArr()}/>
      </div>
    </div>
  );
}

export default App;
