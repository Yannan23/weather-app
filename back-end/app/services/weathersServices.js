const axios = require('axios')
const app = require('../config/app')

exports.getAllweathers = () => {
    const lat = 5;
    const lon = 135;
    return axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${app.openweatherApikey}`
    )

}