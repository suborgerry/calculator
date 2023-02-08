import '../styles/App.css';
import React, { useState } from 'react';
import Provider from './Provider';
import { Title } from './StylingCimoponents';

const providerObj = [
  {
    name: "Backblaze",
    transferCoeff: 0.01,
    storageCoeff: 0.005,
    minimalPrice: 7,
    maxPrice: null,
    options: []
  },
  {
    name: "Bunny",
    transferCoeff: 0.01,
    storageCoeff: 0.01,
    minimalPrice: false,
    maxPrice: 10,
    options: [
      {
        name: "HDD",
        transferCoeff: 0.01,
        storageCoeff: 0.01
      },
      {
        name: "SDD",
        transferCoeff: 0.01,
        storageCoeff: 0.02
      }
    ]
  },
  {
    name: "Vultr",
    transferCoeff: 0.01,
    storageCoeff: 0.01,
    minimalPrice: 5,
    maxPrice: null,
    options: []
  }
];

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

  const providerList = providerObj.map((provider, index) => 
    <Provider key={index} 
              provider={provider}
              storageCount={storageCount}
              transferCount={transferCount}/>
  );

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
        {providerList}
      </div>
    </div>
  );
}

export default App;
