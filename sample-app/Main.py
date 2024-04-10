from flask import Flask

# routing imports 
from UserRoutes import user_app
from ProductRoutes import product_app

app = Flask(__name__)



app.register_blueprint(product_app,url_prefix="/products")
app.register_blueprint(user_app,url_prefix="/users")



app.run(debug=True)