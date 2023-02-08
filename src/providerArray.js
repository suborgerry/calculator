const providerArr = () => {
    return (
        [
            {
                name: "Backblaze",
                transferCoeff: 0.01,
                storageCoeff: 0.005,
                minimalPrice: 7,
                maxPrice: null,
                options: []
            },
            {
                name: "Bunny",
                transferCoeff: 0.01,
                storageCoeff: 0.01,
                minimalPrice: false,
                maxPrice: 10,
                options: [
                    {
                        name: "HDD",
                        transferCoeff: 0.01,
                        storageCoeff: 0.01
                    },
                    {
                        name: "SDD",
                        transferCoeff: 0.01,
                        storageCoeff: 0.02
                    }
                ]
            },
            {
                name: "Scaleway",
                transferCoeff: 0.06,
                storageCoeff: 0.01,
                minimalPrice: false,
                maxPrice: 10,
                options: [
                    {
                        name: "Multi",
                        transferCoeff: 0.06,
                        storageCoeff: 0.01
                    },
                    {
                        name: "Single",
                        transferCoeff: 0.03,
                        storageCoeff: 0.01
                    }
                ]
            },
            {
                name: "Vultr",
                transferCoeff: 0.01,
                storageCoeff: 0.01,
                minimalPrice: 5,
                maxPrice: null,
                options: []
            }
        ]
    )
}

export default providerArr;