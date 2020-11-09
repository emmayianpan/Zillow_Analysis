from flask import Flask, render_template, redirect
import pymongo
from pymongo import MongoClient
import airbnb_scrap

app = Flask(__name__)

CONNECTION_STRING = "mongodb+srv://emma:emma@flask-mongodb-atlas.pqqfg.mongodb.net/<dbname>?retryWrites=true&w=majority"
client = pymongo.MongoClient(CONNECTION_STRING)
db = client.get_database('airbnb')
user_collection = pymongo.collection.Collection(db, 'airbnb')


@app.route("/")

def home():
    # Find one record of data from the mongo database
    airbnb = client.db.airbnb.find_one()
    # Return template and data
    return render_template("index.html", airbnb=airbnb)


# Route that will trigger the scrape function
@app.route("/scrape")
def scrape():
    airbnb = client.db.airbnb
    # Run the scrape function
    airbnb_data = airbnb_scrap.scrap()
    # Update the Mongo database using update and upsert=True
    airbnb.update({}, airbnb_data, upsert=True)
    # Redirect back to home page
    return redirect("/")

@app.route("/analytics")
def analytics():
    return render_template("analytics.html")

@app.route("/sf")
def sf():
    return render_template("sf.html")

@app.route("/nyc")
def nyc():
    return render_template("nyc.html")

@app.route("/la")
def la():
    return render_template("la.html")

@app.route("/hi")
def hi():
    return render_template("hi.html")

@app.route("/bc")
def bc():
    return render_template("bc.html")

@app.route("/bos")
def bos():
    return render_template("bos.html")

@app.route("/nsh")
def nsh():
    return render_template("nsh.html")

@app.route("/chi")
def chi():
    return render_template("chi.html")

@app.route("/colo")
def colo():
    return render_template("colo.html")

@app.route("/den")
def den():
    return render_template("den.html")

if __name__ == "__main__":
    app.run(port=8000)