import './App.css';
import React, { useState } from 'react';
import styled from 'styled-components'

function App() {

  const [storageCount, setStorageCount] = useState(0);
  const [transferCount, setTransferCount] = useState(0);

  // Style components
  const Title = styled.h1`
    font-size: 1em;
  `;

  const String = styled.div`
    width: ${props => props.size}px;
    height: 20px;
    background: #000
  `;

  // Components
  const Provider = (props) => {
    let storage = storageCount * props.storageCoeff;
    let transfer = transferCount * props.transferCoeff;

    let price = (storage + transfer).toFixed(2);
    let count = Math.round(price * 10);

    return(
      <>
        <String size={count}></String><div>${price}</div>
      </>
    )
  }

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
        <div>
          <input type="range" name="cowbell" min="0" defaultValue={0} max="1000" step="1" onChange={handleStorage}/>
          <Title>Storage: {storageCount}GB</Title>
        </div>
        <div>
          <input type="range" name="cowbell" min="0" defaultValue={0} max="1000" step="1" onChange={handleTransfer}/>
          <Title>Transfer: {transferCount}GB</Title>
        </div>
      </div>
      <div className='strings'>
        <div>
          <p>Backblaze</p>
          <Provider storageCoeff="0.005" transferCoeff="0.01"/>
        </div>
        <div>
          <p>Vultr</p>
          <Provider storageCoeff="0.01" transferCoeff="0.01"/>
        </div>
      </div>
    </div>
  );
}

export default App;
