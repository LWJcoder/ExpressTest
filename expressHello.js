/**
 * Created by Joh on 2016/10/10.
 */
var express = require('express');
var http = require('http'),
    morgan = require('morgan'),
    bodyParser = require('body-parser');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/dishes', function (req, res, next) {
    res.writeHead(200,{'Content-Type': 'text/plain'});
    next();

});

app.get('/dishes',function (req, res, next) {
    res.end('Will send all the dishes to you');
});

app.post('/dishes',function (req, res, next) {
    res.end('will add  dishes：' + req.body.name + ' with details: '+ req.body.description);
});

app.delete('/dishes', function (req, res ,next) {
    res.end('delete all the dishes');
});

app.get('/dishes/:dishId',function (req, res, next) {
    res.end('will send details of the dish '+ req.params.dishId+'to you');
});

app.put('/dishes/:dishId', function(req, res, next) {
    res.write('update the dish: '+req.params.dishId+ "\n ");
    res.end('update the dishes：' + req.body.name + ' with details: '+req.body.description);
});

app.delete('/dishes/:dishId', function (req, res, next) {
    res.end('deleting the dishes: '+req.params.dishId);
} );

app.use(express.static(__dirname+'/public'));

app.listen(port, hostname, function () {
    console.log('server is listenning at http://${hostname}: ${port}/');
});

