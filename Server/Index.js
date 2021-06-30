require('dotenv').config()

let express = require('express');
let app = express();
let indexRouter = require('./Routes/Index')
let path = require('path')
let morgan = require('morgan')



app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, '../build')));
app.use('/', indexRouter);


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, "../build", "index.html"))
})

app.listen(8080);