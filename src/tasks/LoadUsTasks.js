import { features } from '../dataLatLng/us-states.json'
import { legendStates } from '../entities/LegendItems'

class LoadUsTasks {
    setUpdate = null
    setUsStates = null
    mapUsStates = features

    loadUsMap = (setUsStates) => {
        this.setUsStates = setUsStates
        fetch('https://disease.sh/v3/covid-19/states')
            .then(res => res.json())
            .then(data => this.#processDataColor(data))
    }

    #processDataColor = (data) => {
        for (let i = 0; i < this.mapUsStates.length; i++) {
            const eachState = this.mapUsStates[i];
            const stateCovid = data.find(stateCovid => stateCovid.state === eachState.properties.NAME)
            if (stateCovid != null) {
                eachState.properties = stateCovid
            }
            this.#setStateColor(eachState)
        }
        this.setUsStates(this.mapUsStates)
    }

    #setStateColor = (eachState) => {
        const itemCases = legendStates[0].legends.find(item => item.isFor(eachState.properties.casesPerOneMillion))
        const itemDeaths = legendStates[1].legends.find(item => item.isFor(eachState.properties.deathsPerOneMillion))
        const itemRecovered = legendStates[2].legends.find(item => item.isFor(eachState.properties.recovered))

        if (itemCases !== null || itemDeaths !== null || itemRecovered !== null) {
            eachState.properties.colorCases = itemCases.color
            eachState.properties.colorDeaths = itemDeaths.color
            eachState.properties.colorRecovered = itemRecovered.color
        }
    }

    loadListTable = (setListRegion) => {
        fetch('https://disease.sh/v3/covid-19/states')
            .then(res => res.json())
            .then(data => {
                const listSorted = this.#sortStatesList(data);
                setListRegion(listSorted)
            })
    }
    #sortStatesList = (mapUsStates) => {
        const statesList = [...mapUsStates]
        statesList.sort((a, b) => {
            return a.cases > b.cases ? -1 : 1
        })
        return statesList
    }

    loadUsCard = (setUpdate) => {
        this.setUpdate = setUpdate
        fetch('https://disease.sh/v3/covid-19/countries/us')
            .then(res => res.json())
            .then(data => this.setUpdate(data))
    }
}

export default LoadUsTasks;