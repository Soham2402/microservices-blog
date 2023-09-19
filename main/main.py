from flask import Flask, jsonify,request, json
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import UniqueConstraint
from flask_migrate import Migrate

from dataclasses import dataclass

from main_producer import publish


app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = 'mysql://root:root@db/main'
CORS(app)


db = SQLAlchemy(app)
SQLALCHEMY_TRACK_MODIFICATIONS = False
migrate = Migrate(app, db)

@dataclass
class Post(db.Model):
    id:int = db.Column(db.Integer,primary_key = True, autoincrement = False)
    title:str = db.Column(db.String(300))
    image:str = db.Column(db.String(300))
    likes: int = db.Column(db.Integer)
    
@dataclass
class PostUser(db.Model):
    id :int= db.Column(db.Integer, primary_key=True, autoincrement = False)
    user_id:int = db.Column(db.Integer)
    post_id :int= db.Column(db.Integer)
    
    UniqueConstraint('user_id','post_id',name = 'user_post_unique')

@app.route('/api/posts')
def index():
    return jsonify(Post.query.all())

@app.route('/api/post/<int:pk>')
def single_post(pk):
    return jsonify(Post.query.get(pk))

@app.route('/api/posts/<int:pk>/likes', methods = ['PUT'])
def likes(pk):
    #get the data of the post
    data = Post.query.get(pk)
    json_string = json.dumps(data)
    json_load = json.loads(json_string)
    
    #increasing the likes count
    like_count = json_load["likes"]
    data.likes = like_count+1
    db.session.commit()
    
    #send an event to update in admin
    json_string = json.dumps({"id":json_load["id"], "likes":like_count})
    publish("update_likes", json_string)
    return {"update":"sucess"}
    

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')