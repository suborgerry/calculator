import { useState } from 'react';

let optionSelected;

const Options = (props) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const optionsData = props.optionsData;

    const handleSelectedOption = (option) => {
        setSelectedOption(option);
    
        option = selectedOption;
    };

    const optionsList = optionsData.map((option, index) =>
    <div key={option.name}>
        <label htmlFor={option.name + index}>
            {option.name}
            <input name={option}
                id={option.name + index}
                type="radio"
                value={option.name}
                defaultChecked={index === 0 ? true : false}
                onChange={() => { handleSelectedOption(option) }} />
        </label>
    </div>
    );

    return (
        <form>
            { optionsList }
        </form>
    )
}

export { Options, optionSelected };