import Provider from './Provider';

const ProviderList = (props) => { 
    let minPrice = Number.POSITIVE_INFINITY;
    
    const checkColor = (price, name) => {
        if(price >= minPrice) {
            return false;
        } else {
            minPrice = price;
            return true;
        }
    };

    return (
        props.providerArr.map((provider) => 
        <Provider key={provider.name} 
                provider = {provider}
                storageCount = {props.storageCount}
                transferCount = {props.transferCount}
                checkColor={checkColor}
                minPrice={minPrice}
        />)
    )
};

export default ProviderList;