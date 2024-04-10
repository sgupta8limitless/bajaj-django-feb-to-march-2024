from flask import Blueprint

user_app = Blueprint("user_app",__name__)

@user_app.route("/")
def getUsers():
    return "all users found"