import mathFloor from '../mathFloor';

const Price = (props) => {
    const freeUpTransfer = props.data.provider.freeUpTransfer;
    const freeUpStorage = props.data.provider.freeUpStorage;
    const minimalPrice = props.data.provider.minimalPrice !== undefined ? props.data.provider.minimalPrice : 1;
    const maxPrice = props.data.provider.maxPrice !== null ? props.data.provider.maxPrice : false;

    let storage;
    let transfer;

    const coeff = (coef, count, freeUp) => {
        let coefReturn = count > freeUp ? coef * count : 0;

        return coefReturn;
    };

    const style = (count) => {
        let styleObj;
        if(window.innerWidth <= 768) { 
            styleObj = {
                'height': (count / 10) + "%"
            }
        } else {
            styleObj = {
                'width': (count / 10) + "%"
            }
        }

        return styleObj;
    };

    if(props.optionSelected) {
        storage = coeff(props.optionSelected.storageCoeff, props.data.storageCount, freeUpStorage);
        transfer = coeff(props.optionSelected.transferCoeff, props.data.transferCount, freeUpTransfer);
    } else {
        storage = coeff(props.data.provider.storageCoeff, props.data.storageCount, freeUpStorage);
        transfer = coeff(props.data.provider.transferCoeff, props.data.transferCount, freeUpTransfer);
    }

    let price = mathFloor((storage + transfer));
    price = price >= minimalPrice ? price : minimalPrice; // check minimal price
    if(maxPrice) { price = price <= maxPrice ? price : maxPrice };

    const count = Math.round(price * 10);
    const isMinPrice = props.checkColor(price);

    return (
        <>
        <div
            className={`string ${isMinPrice ? "min-price" : "max-price"}`}
            style={style(count)}></div>
        <div>{price}$</div>
        </>
    );
}

export default Price;