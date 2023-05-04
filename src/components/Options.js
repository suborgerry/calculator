const Options = ({ optionsData, selectedOption, onCheck }) => {
    const optionsList = optionsData.map((option, index) =>
        <label htmlFor={option.name + index} key={option.name}>
            {option.name}
            <input name={option}
                id={option.name + index}
                type="radio"
                value={option.name}
                defaultChecked={ selectedOption === option.name }
                onChange={() => { onCheck(option) }}
                />
        </label>
    );

    return (
        <form>
            { optionsList }
        </form>
    )
}

export default Options;