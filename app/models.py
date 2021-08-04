from flask import Flask
from flask_cors import CORS


app = Flask(__name__)

cors = CORS(app, support_credentials=True, resources = {r'/api/*':{'origins': '*'}})

