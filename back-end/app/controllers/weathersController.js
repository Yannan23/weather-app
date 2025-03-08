const weathersService = require('../services/weathersServices')

exports.index = async (req, res) => {
   const result = await weathersService.getAllweathers();
   console.log(result.data);
   
    res.send('123');
}