import LegendItem from './LegendItem'

const legendItems = [
    {
        type: "cases",
        legends: [
            new LegendItem(
                "Worst",
                "#7b0000",
                (cases) => cases >= 50_000,
                "white",
                "rgba(204, 16, 52, 0.5)",
            ),
            new LegendItem(
                "Very Servere",
                "#d60000",
                (cases) => cases < 50_000 && cases >= 35_000,
                "white",
            ),
            new LegendItem(
                "Servere",
                "#ff1a1a",
                (cases) => cases < 35_000 && cases >= 20_000,
            ),
            new LegendItem(
                "Moderate",
                "#ff6565",
                (cases) => cases < 20_000 && cases >= 5_000,
            ),
            new LegendItem(
                "Mild",
                "#ffb3b3",
                (cases) => cases < 5_000 && cases > 0,
            ),

            new LegendItem(
                "No Data",
                "#ffffff",
                (cases) => true,
            ),

        ]
    },
    {
        type: "deaths",
        legends: [
            new LegendItem(
                "Worst",
                "#460146",
                (cases) => cases >= 1_000,
                "white",
                "9a009a8a"
            ),
            new LegendItem(
                "Very Servere",
                "#6f016f",
                (cases) => cases < 1_000 && cases >= 500,
                "white",
            ),
            new LegendItem(
                "Servere",
                "#ea03ea",
                (cases) => cases < 500 && cases >= 100,
            ),
            new LegendItem(
                "Moderate",
                "#ff36ff",
                (cases) => cases < 100 && cases >= 50,
            ),
            new LegendItem(
                "Mild",
                "#ffb9ff",
                (cases) => cases < 50 && cases > 0,
            ),

            new LegendItem(
                "No Data",
                "#ffffff",
                (cases) => true,
            ),

        ]
    },
    {
        type: "recovered",
        legends: [
            new LegendItem(
                "Best",
                "#004800",
                (cases) => cases >= 30_000,
                "white",
                "008000ad"
            ),
            new LegendItem(
                "Very Good",
                "#018a01",
                (cases) => cases < 30_000 && cases >= 20_000,
                "white",
            ),
            new LegendItem(
                "Good",
                "#03f303",
                (cases) => cases < 20_000 && cases >= 10_000,
            ),
            new LegendItem(
                "Moderate",
                "#66f966",
                (cases) => cases < 10_000 && cases >= 5_000,
            ),
            new LegendItem(
                "Mild",
                "#b6f9b6",
                (cases) => cases < 5_000 && cases > 0,
            ),

            new LegendItem(
                "No Data",
                "#ffffff",
                (cases) => true,
            ),

        ]
    }
]

const legendStates = [
    {
        type: "cases",
        legends: [
            new LegendItem(
                "Worst",
                "#7b0000",
                (cases) => cases >= 100_000,
                "white",
                "rgba(204, 16, 52, 0.5)",
            ),
            new LegendItem(
                "Very Servere",
                "#d60000",
                (cases) => cases < 100_000 && cases >= 70_000,
                "white",
            ),
            new LegendItem(
                "Servere",
                "#ff1a1a",
                (cases) => cases < 70_000 && cases >= 40_000,
            ),
            new LegendItem(
                "Moderate",
                "#ff6565",
                (cases) => cases < 40_000 && cases >= 20_000,
            ),
            new LegendItem(
                "Mild",
                "#ffb3b3",
                (cases) => cases < 20_000 && cases > 0,
            ),

            new LegendItem(
                "No Data",
                "#ffffff",
                (cases) => true,
            ),

        ]
    },
    {
        type: "deaths",
        legends: [
            new LegendItem(
                "Worst",
                "#460146",
                (cases) => cases >= 1_800,
                "white",
                "9a009a8a"
            ),
            new LegendItem(
                "Very Servere",
                "#6f016f",
                (cases) => cases < 1_800 && cases >= 1_400,
                "white",
            ),
            new LegendItem(
                "Servere",
                "#ea03ea",
                (cases) => cases < 1_400 && cases >= 1_000,
            ),
            new LegendItem(
                "Moderate",
                "#ff36ff",
                (cases) => cases < 1_000 && cases >= 600,
            ),
            new LegendItem(
                "Mild",
                "#ffb9ff",
                (cases) => cases < 600 && cases > 0,
            ),

            new LegendItem(
                "No Data",
                "#ffffff",
                (cases) => true,
            ),

        ]
    },
    {
        type: "recovered",
        legends: [
            new LegendItem(
                "Best",
                "#004800",
                (cases) => cases >= 1_000_000,
                "white",
                "008000ad"
            ),
            new LegendItem(
                "Very Good",
                "#018a01",
                (cases) => cases < 1_000_000 && cases >= 700_000,
                "white",
            ),
            new LegendItem(
                "Good",
                "#03f303",
                (cases) => cases < 700_000 && cases >= 400_000,
            ),
            new LegendItem(
                "Moderate",
                "#66f966",
                (cases) => cases < 400_000 && cases >= 100_000,
            ),
            new LegendItem(
                "Mild",
                "#b6f9b6",
                (cases) => cases < 100_000 && cases > 0,
            ),

            new LegendItem(
                "No Data",
                "#ffffff",
                (cases) => true,
            ),

        ]
    }
]



export { legendItems, legendStates };