from flask import Flask, render_template, redirect

app = Flask(__name__)

@app.route("/")

def home():
    return render_template("index.html")

@app.route("/ny")
def ny():
    return render_template("ny.html")

@app.route("/chi")
def chi():
    return render_template("chi.html")

@app.route("/la")
def la():
    return render_template("la.html")

@app.route("/hou")
def hou():
    return render_template("hou.html")

@app.route("/dtx")
def dtx():
    return render_template("dtx.html")

if __name__ == "__main__":
    app.run(port=8000)