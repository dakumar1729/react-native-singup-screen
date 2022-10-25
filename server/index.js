var express = require('express');
var http = require('http')
var socketio = require('socket.io')
var mongojs = require('mongojs')

var ObjectID = mongojs.ObjectID;
var db = mongojs('mongodb://localhost:27017/chat')
var app = express();
var server = http.Server(app)
var websocket = socketio(server);
server.listen(3000, () => console.log('listening on : 3000'))

var clients = {}
var users ={}
var userId =1;
websocket.on('connection', function (socket) {
	clients[socket.id] =socket;
	socket.on('userJoined', (userId) => onUserJoined(userId, socket))
	socket.on('message', (message) => onMessageRecived(message, socket))
	socket.on('hello',(token, callback) => {
		jwt.verify(token, Config.jwt_SECRETS, (err, decoded) => {
			if (err) {
				callback({
					code: 300,
					status: 'failure',
					permission: '',
					message: err.message
				})
			} else{
				deviceController.listStats(null, (result) => {
					callback(result);
				})
			}
		});
	});
});

function onUserJoined(userid, socket){
	try{
		if(!userId){
			var user = db.collection('users').insert({},(err, user) =>{
				socket.emit('userJoined', user._id);
				users[socket.id] = user._id
				_sendExistingessagess(socket)
			})
		} else {
			users[socket.id] = user._id
			_sendExistingessagess(socket)
		}

	} catch(error){
		console.log(console.error());
	}
}
function onMessageRecived(message, senderSocket){
	var userId = users[senderSocket.id];
	if(!userId) return;
	_sendAndSaveMessage(message, senderSocket)
}


function _sendExistingessagess(socket){
	var messages = db.collection('messages')
	.fnd({chatId})
	.sort({createdAt :1})
	.toArray((err, messages) =>{
		if(messages.lentgh) return;
		socket.emit('message', messages.reverse());
	})
}
function _sendAndSaveMessage(message,socket, formServer) {
	var messageData = {
		text: message.text,
		user: message.user,
		createdAt : new Date(message.createdAt),
		chatId : chatId
	};
	db.collection('messages').insert(messageData, (err, message) =>{
		var emmiter = fromServer ? websocket : socket.brodcast;
		emmiter.emit('message', [message])
	})

	var stdin = process.openStdin();
	stdin.addListener('data', function(d){
		_sendAndSaveMessage({
			text: d.toString().trim(),
			createdAt; new Date(),
			user: {_id: 'robot'}
		})
	}, null, true)

}