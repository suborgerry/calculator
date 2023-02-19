const Options = (props) => {
    const optionsList = props.optionsData.map((option, index) =>
        <label htmlFor={option.name + index} key={option.name}>
            {option.name}
            <input name={option}
                id={option.name + index}
                type="radio"
                value={option.name}
                defaultChecked={index === 0 ? true : false}
                onChange={() => { props.onCheck(option) }}
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