var express = require('express'),
    multer  = require('multer'), 
    path = require('path');
var routes = require('./routes');

var app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'pug')
app.set('views', __dirname + '/views');

app.get('/', routes.index);
app.post('/', [multer({ dest: './uploads/'}).single('upl'), routes.meta]);

app.listen(process.env.PORT || 3000)
