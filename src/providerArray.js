const providerArr = () => {
    return (
        [
            {
                name: "Backblaze",
                transferCoeff: 0.01,
                storageCoeff: 0.005,
                minimalPrice: 7,
                maxPrice: null,
                freeUpTransfer: 0,
                freeUpStorage: 0,
                options: null
            },
            {
                name: "Bunny",
                transferCoeff: 0.01,
                storageCoeff: 0.01,
                minimalPrice: 0,
                maxPrice: 10,
                freeUpTransfer: 0,
                freeUpStorage: 0,
                options: [
                    {
                        name: "HDD",
                        transferCoeff: 0.01,
                        storageCoeff: 0.01,
                    },
                    {
                        name: "SDD",
                        transferCoeff: 0.01,
                        storageCoeff: 0.02,
                    }
                ]
            },
            {
                name: "Scaleway",
                transferCoeff: 0.06,
                storageCoeff: 0.02,
                minimalPrice: 0,
                maxPrice: null,
                freeUpTransfer: 75,
                freeUpStorage: 75,
                options: [
                    {
                        name: "Multi",
                        transferCoeff: 0.06,
                        storageCoeff: 0.02,
                    },
                    {
                        name: "Single",
                        transferCoeff: 0.03,
                        storageCoeff: 0.02,
                    }
                ]
            },
            {
                name: "Vultr",
                transferCoeff: 0.01,
                storageCoeff: 0.01,
                minimalPrice: 5,
                maxPrice: null,
                freeUpTransfer: 0,
                freeUpStorage: 0,
                options: null
            }
        ]
    )
}

export default providerArr;