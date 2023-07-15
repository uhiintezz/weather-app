const express = require('express')
const bodyParser = require('body-parser')
const weatherRequest = require('./requests/weather.request.js')

const app = express()
// 50c85990651c117d268a4c50dac3b794

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (rec, res) => {
    res.render('index', {weather: null, error: null})
})

app.post('/', async (rec, res) => {
    const { city } = rec.body

    const {weather, error} = await weatherRequest(city)

    res.render('index', {weather, error})
})

app.listen(4000, () => { 
    console.log('4000...')
})