import mathFloor from '../mathFloor';
import { String } from './StylingCimoponents';
import { useState } from 'react';


const Provider = (props) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const options = props.provider.options;
    const optionsCheck = options.length > 0;
    
    let storage;
    let transfer;
    let optionsItems = "";

    const handleSelectedOption = (option) => {
        setSelectedOption(option);
    };

    if (optionsCheck) {
        if(selectedOption != null) {
            storage = props.storageCount * selectedOption.storageCoeff;
            transfer = props.transferCount * selectedOption.transferCoeff;
        } else {
            storage = props.storageCount * props.provider.storageCoeff;
            transfer = props.transferCount * props.provider.transferCoeff;
        }

        optionsItems = options.map((option, index) =>
            <div key={index}>
                <label htmlFor={option.name + index}>
                    {option.name}
                    <input name={option}
                        id={option.name + index}
                        type="radio"
                        value={option.name}
                        defaultChecked={index === 1 ? true : false}
                        onChange={() => { handleSelectedOption(option) }} />
                </label>
            </div>
        )
    } else {
        storage = props.storageCount * props.provider.storageCoeff;
        transfer = props.transferCount * props.provider.transferCoeff;
    }

    // console.log(storage, transfer);

    const name = props.provider.name;

    const minimalPrice = props.provider.minimalPrice ? props.provider.minimalPrice : 1;

    let price = mathFloor((storage + transfer));
    price = price >= minimalPrice ? price : minimalPrice;
    const count = Math.round(price * 10);

    return (
        <div className="strings-item">
            <p>{name}</p>
            <form>
                {optionsCheck && optionsItems}
            </form>
            <div className="strings-item__price">
                <String size={count}></String>
                <div>${price}</div>
            </div>
        </div>
    )
}

export default Provider;