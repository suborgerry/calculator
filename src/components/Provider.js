import mathFloor from '../mathFloor';
import { String } from './StylingCimoponents';
import { Options, optionSelected } from './Options';

const Provider = (props) => {
    const optionsData = props.provider.options;
    const name = props.provider.name;
    const freeUpTransfer = props.provider.freeUpTransfer;
    const freeUpStorage = props.provider.freeUpStorage;
    
    const coeff = (coef, count, freeUp) => {
        let coefReturn = count > freeUp ? coef * count : 0;

        return coefReturn;
    };

    let storage;
    let transfer;

    if(optionSelected) {
        storage = coeff(optionSelected.storageCoeff, props.storageCount, freeUpStorage);
        transfer = coeff(optionSelected.transferCoeff, props.transferCount, freeUpTransfer);
    } else {
        storage = coeff(props.provider.storageCoeff, props.storageCount, freeUpStorage);
        transfer = coeff(props.provider.transferCoeff, props.transferCount, freeUpTransfer);
    }

    const minimalPrice = props.provider.minimalPrice !== undefined ? props.provider.minimalPrice : 1;
    let price = mathFloor((storage + transfer));
        price = price >= minimalPrice ? price : minimalPrice;
    const count = Math.round(price * 10);

    return (
        <div className="strings-item">
            <p>{name}</p>
            { optionsData && <Options optionsData={optionsData}/> }
            <div className="strings-item__price">
                <String size={count}></String>
                <div>${price}</div>
            </div>
        </div>
    )
}

export default Provider;