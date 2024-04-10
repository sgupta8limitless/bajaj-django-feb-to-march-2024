import psycopg2
from ProductController import ProductController
from ProductGateway import ProductGateway


conn = psycopg2.connect(user="postgres",password="thorabh",host="localhost",database="pms_django")

productGateway = ProductGateway(conn)
productController = ProductController(productGateway)

productController.viewAll()