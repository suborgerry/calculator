import mathFloor from '../mathFloor';
import { String } from './StylingCimoponents';

const Provider = (props) => {
    const options = props.provider.options;
    const optionsCheck = options.length > 0;

    let storage;
    let transfer;
    let optionsItems = "";
    if (optionsCheck) {
        optionsItems = options.map((option, index) =>
            <div key={index}>
                <label htmlFor={option.name + index}>
                    {option.name}
                    <input name={option}
                        id={option.name + index}
                        type="radio"
                        value={option.name}
                        data-transfer-coeff={option.transferCoeff}
                        data-storage-coeff={option.storageCoeff} />
                </label>
            </div>
        )
    } else {
        storage = props.storageCount * props.provider.storageCoeff;
        transfer = props.transferCount * props.provider.transferCoeff;
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