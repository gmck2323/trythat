const Clarifai = require('clarifai');

const app = new Clarifai.App({
    apiKey: '556577a361bd47949813a6da5051d2c4'
  })
  
const handleApi = (req,res) => {
    app.models.predict("bd367be194cf45149e75f01d59f77ba7",req.body.input)
    .then(data => {
        res.json(data);
    })
    .catch(err => res.status(400).json('Unable to work with api'))
}

module.exports = {
    handleApi
}