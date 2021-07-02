from flask import Flask, json, request, jsonify
from werkzeug.wrappers import response
from flask_sqlalchemy import SQLAlchemy 
from flask_marshmallow import Marshmallow 
import os
from flask_cors import CORS, cross_origin

# Init app

def init_app():
  app = Flask(__name__)
  CORS(app)

# app.config['SECRET_KEY'] = 'the quick brown fox jumps over the lazy   dog'
# app.config['CORS_HEADERS'] = 'Content-Type'
# logging.getLogger('flask_cors').level = logging.DEBUG
basedir = os.path.abspath(os.path.dirname(__file__))
# Database

# Init db
db = SQLAlchemy(app)
# Init ma
ma = Marshmallow(app)

# Product Class/Model
class Product(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(100), unique=True)
  description = db.Column(db.String(200))
  price = db.Column(db.Float)
  qty = db.Column(db.Integer)

  def __init__(self, name, description, price, qty):
    self.name = name
    self.description = description
    self.price = price
    self.qty = qty

# Product Schema
class ProductSchema(ma.Schema):
  class Meta:
    fields = ('id', 'name', 'description', 'price', 'qty')

# Init schema
product_schema = ProductSchema()
products_schema = ProductSchema(many=True)

# @app.route('/test')
# def aa():
#     response = jsonify(message="testing")
#     return response

    

# Create a Product
@app.route('/product', methods=['POST'])
# @cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def add_product():
  name = request.json['name']
  description = request.json['description']
  price = request.json['price']
  qty = request.json['qty']

  new_product = Product(name, description, price, qty)


  

  db.session.add(new_product)
  db.session.commit()

  return product_schema.jsonify(new_product)



# Get All Products
@app.route('/product', methods=['GET'])
# @cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def get_products():
  all_products = Product.query.all()
  result = products_schema.dump(all_products)
  # response = jsonify(message="test")
  return jsonify(result)

  # response.headers.add("Access-Control-Allow-Origin", "*")

# Get Single Products
@app.route('/product/<id>', methods=['GET'])
def get_product(id):
  product = Product.query.get(id)
  return product_schema.jsonify(product)

# Update a Product
@app.route('/product/<id>', methods=['PUT'])
def update_product(id):
  product = Product.query.get(id)

  name = request.json['name']
  description = request.json['description']
  price = request.json['price']
  qty = request.json['qty']

  product.name = name
  product.description = description
  product.price = price
  product.qty = qty

  db.session.commit()

  return product_schema.jsonify(product)

# Delete Product
@app.route('/product/<id>', methods=['DELETE'])
def delete_product(id):
  product = Product.query.get(id)
  db.session.delete(product)
  db.session.commit()

  return product_schema.jsonify(product)

# Run Server
if __name__ == '__main__':
    app.run(debug=True)