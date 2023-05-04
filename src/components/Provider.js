import Options from './Options';
import Price from './Price';

const Provider = (props) => {
    const optionsData = props.provider.options;
    const name = props.provider.name;
    const { selectedOption, onOptionSelect, isMin } = props;
    
    const checkOption = (option) => {
        onOptionSelect(name, option.name)
    };

    return (
        <div className="strings-item">
            <div className="strings-item__name_option">
                <p>{name}</p>
                { optionsData && <Options optionsData={optionsData} selectedOption={selectedOption} onCheck={checkOption}/> }
            </div>
            <div className="strings-item__price">
                <Price 
                    data={props.provider}
                    isMin={isMin}
                />
            </div>
        </div>
    )
}

export default Provider;