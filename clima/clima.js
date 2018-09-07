const axios = require('axios');


const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=7b2621bfd7a2b108930616914d10991a`)

    return resp.data.main.temp;
}


module.exports = {
    getClima
}