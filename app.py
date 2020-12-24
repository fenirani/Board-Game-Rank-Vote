import flask
import os
import flask_socketio

app = flask.Flask(__name__)
socketio = flask_socketio.SocketIO(app)
socketio.init_app(app, cors_allowed_origins="*")

@app.route('/')
def index ():
    
    return flask.render_template("index.html")

app.run(
    port=int(os.getenv('PORT',8080)),
    host=os.getenv('IP','0.0.0.0')
)