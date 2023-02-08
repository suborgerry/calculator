import Provider from './Provider';

const ProviderList = (props) => { 
    return (
        props.providerArr.map((provider, index) => 
        <Provider key={provider.name} 
                provider={provider}
                storageCount={props.storageCount}
                transferCount={props.transferCount}
        />)
    )
};

export default ProviderList;