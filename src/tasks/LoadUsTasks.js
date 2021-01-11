class LoadUsTasks {
    setUpdate = null

    loadUsCard = (setUpdate) => {
        this.setUpdate = setUpdate
        fetch('https://disease.sh/v3/covid-19/countries/us')
            .then(res => res.json())
            .then(data => this.setUpdate(data))
    }
}

export default LoadUsTasks;