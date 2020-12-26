import flask
import os
import flask_socketio

app = flask.Flask(__name__)
socketio = flask_socketio.SocketIO(app)
socketio.init_app(app, cors_allowed_origins="*")

@socketio.on('connect')
def on_connect():
    print('Someone connected!')

@socketio.on('disconnect')
def on_disconnect():
    print ('Someone disconnected!')

@socketio.on('new subm')
def on_new_rank(data):
    print("Rank Received")
    print(data)
    socketio.emit('new rank', data)

@app.route('/')
def index ():
    return flask.render_template("index.html")

if __name__ == '__main__': 
    socketio.run(
        app,
        port=int(os.getenv('PORT',8080)),
        host=os.getenv('IP','0.0.0.0'),
        debug=True
)