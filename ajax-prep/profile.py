import random

from flask import Flask, request, render_template, jsonify

app = Flask(__name__)


@app.route('/')
def index():
    """Show index page."""
    
    return render_template("index.html")


@app.route('/api/profile', methods=['POST'])
def profile():
    """Return results from profile form."""

    fullname = request.json['name']
    print("*"*20)
    print(fullname)
    print("*"*20)
    age = request.json['age']
    occupation = request.json['occupation']
    salary = request.json['salary']
    print("*"*20)
    print(salary)
    print("*"*20)
    
    return jsonify({'fullname': fullname,
                    'age': age,
                    'occupation': occupation,
                    'salary': salary})





if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
