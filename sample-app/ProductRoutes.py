from flask import Blueprint,request,jsonify
import json
from ProductGateway import ProductGateway
from Product import Product

product_app = Blueprint("product_app",__name__)

productGateway = ProductGateway()


@product_app.route("/",methods=["POST"])
def createProduct():
    
    productDict = json.loads(request.data)
    product = Product(productDict["name"],productDict["price"],productDict["imageurl"],productDict["category"])
    if(productGateway.createProduct(product)):
        return {"message":"Product Created"}
    
    return {"message":"Some Problem Creating Product"}


@product_app.route("/",methods=["GET"])
def getAll():

    products = productGateway.getAllProducts()
    productsList = []
    for product in products:
        productsList.append(Product(product[1],product[2],product[3],product[4],product[0],product[5]).__dict__)

    return jsonify(productsList)

# @product_app.route("/<int:id>",methods=["GET"])