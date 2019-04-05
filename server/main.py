import flask
from upload import upload_api
from register import register_api
from user import user_api
app = flask.Flask(__name__)
app.config["DEBUG"] = True
app.register_blueprint(upload_api)
app.register_blueprint(register_api)
app.register_blueprint(user_api)
@app.route('/', methods=['GET'])
def home():
    return "<h1>Distant Reading Archive</h1><p>This site is a prototype API for distant reading of science fiction novels.</p>"

app.run()