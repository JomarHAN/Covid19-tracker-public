import { features } from '../dataLatLng/us-states.json'

class LoadUsTasks {
    setUpdate = null
    setUsStates = null

    loadUsMap = (setUsStates) => {
        setUsStates(features)
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