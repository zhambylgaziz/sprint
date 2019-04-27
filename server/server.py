import uuid
from flask import (
    Flask,
    request,
    abort,
    jsonify
)
import json

app = Flask(__name__)

users = ['john']


# test
@app.route("/")
def hello():
    return "hello"

# for test
@app.route("/login", methods=["POST"])
def login():
    username = request.json.get('username', None)
    if username is None or username not in users:
        abort(401)
    else:
        return jsonify({
            'status': 'OK',
            'message': 'logged in',
        })


# get all products
@app.route("/getProducts", methods=["GET"])
def get_products():
    with open('lists/products.json', 'r', encoding="utf8") as products:
        data = products.read()
    obj = json.loads(data)
    return jsonify(obj)


# get all kid products
@app.route("/getKidProducts", methods=["GET"])
def get_kid_products():
    with open('lists/kids.json', 'r', encoding="utf8") as products:
        data = products.read()
    obj = json.loads(data)
    return jsonify(obj)


# get drinks
@app.route("/getDrinks", methods=["GET"])
def get_drinks():
    with open('lists/drinks.json', 'r', encoding="utf8") as products:
        data = products.read()
    obj = json.loads(data)
    return jsonify(obj)


# get home products
@app.route("/getHomeProducts", methods=["GET"])
def get_home_products():
    with open('lists/home.json', 'r', encoding="utf8") as products:
        data = products.read()
    obj = json.loads(data)
    return jsonify(obj)


# get zoo products
@app.route("/getZoo", methods=["GET"])
def get_zoo():
    with open('lists/zoo.json', 'r', encoding="utf8") as products:
        data = products.read()
    obj = json.loads(data)
    return jsonify(obj)


# get products in the cart by mail
@app.route("/getCart", methods=["POST"])
def get_cart():
    username = request.json.get('username', None)
    with open('lists/cart.json', 'r', encoding="utf8") as cart:
        data = cart.read()
    obj = json.loads(data)
    if username is None:
        abort(401)
    else:
        return jsonify(obj[username])


# add product to the cart
@app.route("/addToCart", methods=["POST"])
def add_to_cart():
    id = request.json.get('id', None)
    username = request.json.get('username', None)
    category = request.json.get('category', None)
    if username is None or id is None or category is None:
        abort(401)
    else:
        file = 'lists/' + category + '.json'
        with open(file, 'r', encoding="utf8") as file:
            data = file.read()
        products = json.loads(data)
        product = None
        for i in products:
            if str(i['id']) == str(id):
                product = i
        if product is not None:
                with open('lists/cart.json', 'r', encoding="utf8") as file:
                    data = file.read()
                obj = json.loads(data)
                have = False
                for i in obj[username]:
                    if i['id'] == product['id']:
                        i['quantity'] = str(int(i['quantity']) + 1)
                        have = True
                        break
                if not have:
                    obj[username].append(product)
                with open('lists/cart.json', 'w', encoding="utf8") as file:
                    json.dump(obj, file, indent=2, ensure_ascii=False)
                return jsonify(obj)
        else:
            return jsonify({
                'status': 'NOT OK',
                'message': 'product not fount',
            })


# delete from product by mail
@app.route("/deleteProduct", methods=["POST"])
def delete_product_from_cart():
    id = request.json.get('id', None)
    username = request.json.get('username', None)
    if username is None or id is None:
        abort(401)
    else:
        with open('lists/cart.json', 'r', encoding="utf8") as file:
            data = file.read()
            obj = json.loads(data)
            have = False
            for i in obj['user']:
                if str(i['id']) == str(id):
                    have = True
                    if int(str(i['quantity'])) == 1:
                        obj['user'].remove(i)
                    else:
                        i['quantity'] = str(int(i['quantity']) - 1)
                    break
            if have:
                with open('lists/cart.json', 'w', encoding="utf8") as file:
                    json.dump(obj, file, indent=2, ensure_ascii=False)
                return jsonify({
                    'status': 'OK',
                    'message': 'product deleted',
                })
            else:
                return jsonify({
                    'status': 'ERROR',
                    'message': 'product not found',
                })


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
    # app.run(debug=True)
