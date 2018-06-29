"use strict";
// use cors
function setCors() {
  if (process.env.ENVIRONMENT === "production") {
    app.use(cors())
  } else {
    var whitelist = ['http://desk435.local', 'http://a.local']
    app.use(cors({
      origin: function(origin, callback){
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1
        callback(null, originIsWhitelisted)
      }
    }))
  }
}

// register file? set rooms?
function registerRooms() {
  tmxParser.parseFile('./maps/default.tmx', function (err, map) {
    if (err) throw err;
    gameServer.register('battle', BattleMapRoom, { map: map })
  })
}

// load models
function loadModels() {
  
}

// Load variables
var tmxParser = require('tmx-parser'),
    colyseus = require('colyseus'),
    http = require('http'),
    express = require('express'),
    cors = require('cors'),
    port = process.env.PORT || 3553,
    app = express(),
    server = http.createServer(app),
    gameServer = new colyseus.Server({ server: server }),
    BattleMapRoom = require('./rooms/BattleMapRoom'),
    client = 'default'

setCors()
registerRooms()
loadModels()

// server start
app.use(express.static( __dirname + '/../clients/'+ client +'/public' ))

// make all this json stuffs
// app.get('/', function (req, res) {
  // res.render(__dirname + '/../clients/'+ client +'/index.ejs')
// })

server.listen(port)
console.log(`Listening on http://localhost:${ port } in ${process.env.ENVIRONMENT} mode`)
