const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const image = require('./controllers/image');


const app = express();

app.use(bodyParser.json());
app.use(cors());

require('./controllers/food')(app,fs);

app.get('/', (req, res)=> {
    res.send('Working');
    });

app.post('/imageurl', (req, res) => {image.handleApi(req,res)})

if(process.env.NODE_ENV === 'production') {
    //Express will serve up prod assets
    // main.js/main.css
    app.use(express.static('client/build'));
    
    //Express will serve up index.html if it doesnt recognize route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT)