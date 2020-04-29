const fetch = require('node-fetch');
const keys = require('../config/keys');

module.exports = (app, fs) => {
    
    const dataPath = './data/ingredients.json';
    const key = keys.spoontacularKey

    app.get('/api/food-joke', (req, res) => {
        fetch(`https://api.spoonacular.com/food/jokes/random?apiKey=${key}`)
        .then(res => res.json())
        .then(data => {
            res.send({ data });
        })
        .catch(err => console.log(err))
})

    app.get('/api/food-trivia', (req, res) => {
        fetch(`https://api.spoonacular.com/food/trivia/random?apiKey=${key}`)
        .then(res => res.json())
        .then(data => {
            res.send({ data });
        })
        .catch(err => console.log(err))
})

    app.get('/api/my-ingredients', (req,res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    })

    app.post('/api/recipes', (req, res) => {
        fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&includeIngredients=${req.body.ingredients}&cuisine=${req.body.cuisine}&diet=${req.body.diet}`)
        .then(res => res.json())
        .then(data => {
            res.send({ data });
        })
        .catch(err => console.log(err))
})

    app.post('/api/recipeinfo', (req, res) => {
        fetch(`https://api.spoonacular.com/recipes/${req.body.id}/information?apiKey=${key}`)
        .then(res => res.json())
        .then(data => {
            res.send({ data });
        })
        .catch(err => console.log(err))
})

}