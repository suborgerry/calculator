import { useState } from "react";
import Provider from "./Provider";

const coeff = (coef, count, freeUp) => (count > freeUp ? coef * count : 0);

const ProviderList = ({ storageCount, transferCount, providerArr }) => {

    const [optionsState, setOptionState] = useState(() =>
        Object.fromEntries(
            providerArr.map((p) => [p.name, p.options?.[0]?.name ?? null])
        )
    );

    const updProviderArray = providerArr.map((p) => ({
        ...p,
        calculatedPrice: Math.trunc(
            p.options
                ? coeff(
                    p.options.find((o) => o.name === optionsState[p.name])
                        .transferCoeff,
                    transferCount,
                    p.freeUpTransfer
                ) +
                coeff(
                    p.options.find((o) => o.name === optionsState[p.name])
                        .storageCoeff,
                    storageCount,
                    p.freeUpStorage
                )
                : coeff(p.transferCoeff, transferCount, p.freeUpTransfer) +
                coeff(p.storageCoeff, storageCount, p.freeUpStorage)
        ),
    }));

    const { name: minProvider } = updProviderArray.reduce((accumulator, currentValue) => currentValue.calculatedPrice < accumulator.calculatedPrice ? currentValue : accumulator)

    return updProviderArray.map((provider) => (
        <Provider
            key={provider.name}
            isMin={minProvider === provider.name}
            provider={provider}
            storageCount={storageCount}
            transferCount={transferCount}
            onOptionSelect={(key, value) => {
                setOptionState((s) => ({
                    ...s,
                    [key]: value,
                }));
            }}
            selectedOption={optionsState[provider.name]}
        />
    ));
};

export default ProviderList;
