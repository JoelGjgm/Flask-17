from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/monica')
def monica():
  return render_template('monica.html')

@app.route('/colorir')
def colorir():
  return render_template('colorir.html')

@app.route('/calculadora')
def calculadora():
  return render_template('calculadora.html')

@app.route('/formas_geometricas')
def formas_geometricas():
  return render_template('formas_geometricas.html')

@app.route('/flores')
def flores():
  return render_template('flores.html')

app.run(host='0.0.0.0', port=81)
