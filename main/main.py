from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import UniqueConstraint
from flask_migrate import Migrate

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = 'mysql://root:root@db/main'
CORS(app)


db = SQLAlchemy(app)
SQLALCHEMY_TRACK_MODIFICATIONS = False
migrate = Migrate(app, db)

class Post(db.Model):
    id = db.Column(db.Integer,primary_key = True, autoincrement = False)
    title = db.Column(db.String(300))
    image = db.Column(db.String(300))
    
class PostUser(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement = False)
    user_id = db.Column(db.Integer)
    post_id = db.Column(db.Integer)
    
    UniqueConstraint('user_id','post_id',name = 'user_post_unique')

@app.route('/')
def index():
    return 'hello'

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')