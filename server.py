from flask import *
from werkzeug.datastructures import ImmutableMultiDict
import json

app = Flask(__name__)

coords = []

@app.route("/", methods=["POST"])
def index():
    print request.form.getlist('x'),request.form.getlist('y'),request.form.getlist('z')
    x = float(request.values["x"])
    y = float(request.values["y"])
    z = float(request.values["z"])
    coords.append((x,y))
    return "hello"

@app.route("/c", methods=["POST", "GET"])
def c():
    return json.dumps(coords[-1])

app.run(debug=True)
