// import { useRef } from 'react';
// import mathFloor from '../mathFloor';

const Price = ({ data, isMin }) => {
    const { calculatedPrice } = data;

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

    const count = calculatedPrice * 10;

    return (
        <>
        <div
            className={`string ${isMin ? "min-price" : "max-price"}`}
            style={style(count)}></div>
        <div>{calculatedPrice}$</div>
        </>
    );
}

export default Price;