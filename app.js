const path = require('path');

// require('dotenv').config({ path: path.join(__dirname, '.env') });

const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const session = require('express-session');
const passport = require('passport');
const response = require('./utils/response');
const routes = require('./routes');
const defineSocketHandlers = require('./sockets/socket');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
require('./config/passport')(passport);

app.set("view options", {layout: false});

//sokcets connection
defineSocketHandlers(io);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(response);
app.use('/', routes);

const port = process.env.PORT || 3000;



server.listen(port, err => {
    console.log(err || 'Listening on port ' + port);
});
