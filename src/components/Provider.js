import { useState } from 'react';
import Options from './Options';
import Price from './Price';

const Provider = (props) => {
    const optionsData = props.provider.options;
    const name = props.provider.name;
    const [optionSelected, setOptionSelected] = useState(null);

    const checkOption = (option) => {
        setOptionSelected(option)
    };

    return (
        <div className="strings-item">
            <div className="strings-item__name_option">
                <p>{name}</p>
                { optionsData && <Options optionsData={optionsData} onCheck={checkOption}/> }
            </div>
            <div className="strings-item__price">
                <Price 
                    data={props}
                    optionSelected={optionSelected}
                    checkColor={props.checkColor}
                    minPrice={props.minPrice} />
            </div>
        </div>
    )
}

export default Provider;