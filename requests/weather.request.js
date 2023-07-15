const rp = require('request-promise')


module.exports = async function(city = '') {
    if (!city) {
        console.log('error')
        return
    } 

    const KEY = '9bbc13ecdab4ba76c277a7cc3c7434ec'
    const uri = 'https://api.openweathermap.org/data/2.5/weather'


    const options = {
        uri,
        qs: {
            appid: KEY,
            q: city,
            units: 'imperial'
        }, 
        json: true
    }
    
    try {
        const data = await rp(options) 
        const celsius = Math.floor(((data.main.temp - 32) * 5/9), 2)
        console.log(data)
        return {
            weather: `${data.name}: ${celsius}`,
            error: null
        }
    } catch (error) {
        return {
            weather: null,
            error: 'city not found'
        }
    }
    
} 