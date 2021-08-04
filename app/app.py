from flask import (request, jsonify, send_from_directory)
from flask_cors import CORS, cross_origin

app = Flask(__name__, static_folder="../react-flask-heroku/build", static_url_path="")

@app.route("/")
@cross_origin()
def serve():
    
    return send_from_directory(app.static_folder, "index.html")




if __name__ == "__main__":
    app.run(debug = False)