import '../styles/App.css';
import React, { useState } from 'react';
import mathFloor from '../mathFloor';
import styled from 'styled-components';
function App() {
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
      storageCoeff: 0.005,
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

  const [storageCount, setStorageCount] = useState(0);
  const [transferCount, setTransferCount] = useState(0);

  const String = styled.div`
    width: ${props => props.size}px;
    height: 20px;
    background: #acaaaa
  `;

  const Title = styled.h1`
    font-size: 1em;
  `;

  // Components
  const Provider = (props) => {
    const options = props.provider.options;
    const optionsCheck = options.length > 0;
    
    let storage;
    let transfer;
    let optionsItems = "";
    if(optionsCheck) {
      // storage = 
      // transfer =

      optionsItems = options.map((option, index) =>
        <div key={index}>
          <label for={option.name + index}>
            {option.name}
            <input name={option} id={option.name + index} type="radio" value={option.name} data-transferCoeff={option.transferCoeff} data-storageCoeff={option.storageCoeff}/>
          </label>
        </div>
      )
    } else {
      storage = storageCount * props.provider.storageCoeff;
      transfer = transferCount * props.provider.transferCoeff;
    }

    const name = props.provider.name;

    const minimalPrice = props.provider.minimalPrice ? props.provider.minimalPrice : 1;
    
    let price = mathFloor((storage + transfer));
        price = price >= minimalPrice ? price : minimalPrice;
    const count = Math.round(price * 10);

    return (
      <div className="strings-item">
        <p>{name}</p>
        <form>
          { optionsCheck && optionsItems }
        </form>
        <div className="strings-item__price">
          <String size={count}></String>
          <div>${price}</div>
        </div>
      </div>
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

  const providerList = providerObj.map((provider, index) => 
    <Provider key={index} 
              provider={provider}/>
    );

  return (
    <div className="App">
      <div className='inputs'>
        <div className="inputs-item">
          <Title>Storage: {storageCount}GB</Title>
          <input type="range" name="cowbell" min="0" defaultValue={0} max="1000" step="1" onChange={handleStorage}/>
        </div>
        <div className="inputs-item">
          <Title>Transfer: {transferCount}GB</Title>
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
