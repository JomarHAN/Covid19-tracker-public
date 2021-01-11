class LoadWorldTasks {
    setWorldData = null


    loadWorldData = (setWorldData) => {
        this.setWorldData = setWorldData
        fetch('https://disease.sh/v3/covid-19/all')
            .then(res => res.json())
            .then(data => this.setWorldData(data))
    }
}

export default LoadWorldTasks;