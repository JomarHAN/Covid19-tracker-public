import { features } from '../dataLatLng/countries.json'
import { legendItems } from '../entities/LegendItems'

class LoadWorldTasks {
    setWorldData = null
    setCountries = null
    mapCountries = features
    setListRegion = null

    loadListRegion = (setListRegion) => {
        this.setListRegion = setListRegion
        fetch('https://disease.sh/v3/covid-19/countries')
            .then(res => res.json())
            .then(data => this.setListRegion(this.#sortList(data)))
    }

    #sortList = (data) => {
        const listSorted = [...data]
        listSorted.sort((a, b) => {
            return a.cases > b.cases ? -1 : 1
        })

        return listSorted
    }

    loadCountryData = (countryCovid, setWorldData) => {
        this.setWorldData = setWorldData
        fetch(`https://disease.sh/v3/covid-19/countries/${countryCovid}?strict=true`)
            .then(res => res.json())
            .then(data => this.setWorldData(data))
            .catch(err => console.log(err))
    }

    loadWorldData = (setWorldData) => {
        this.setWorldData = setWorldData
        fetch('https://disease.sh/v3/covid-19/all')
            .then(res => res.json())
            .then(data => this.setWorldData(data))
    }

    load = (setCountries) => {
        this.setCountries = setCountries

        fetch('https://disease.sh/v3/covid-19/countries')
            .then(res => res.json())
            .then(data => this.#processCovidData(data))
            .catch(err => console.log(err))
    }

    #processCovidData = (data) => {
        for (let i = 0; i < this.mapCountries.length; i++) {
            const mapCountry = this.mapCountries[i]
            const covidCountry = data.find(covidCountry => covidCountry.countryInfo.iso3 === mapCountry.properties.ISO_A3)

            if (covidCountry != null) {
                mapCountry.properties = covidCountry
            }
            this.#setCountryColor(mapCountry)
        }
        this.setCountries(this.mapCountries)
    }

    #setCountryColor = (mapCountry) => {
        const itemCases = legendItems[0].legends.find(item => item.isFor(mapCountry.properties.casesPerOneMillion))
        const itemDeaths = legendItems[1].legends.find(item => item.isFor(mapCountry.properties.deathsPerOneMillion))
        const itemRecovered = legendItems[2].legends.find(item => item.isFor(mapCountry.properties.recoveredPerOneMillion))

        if (itemCases !== null || itemDeaths !== null || itemRecovered !== null) {
            mapCountry.properties.colorCases = itemCases.color
            mapCountry.properties.colorDeaths = itemDeaths.color
            mapCountry.properties.colorRecovered = itemRecovered.color
        }
    }
}

export default LoadWorldTasks;