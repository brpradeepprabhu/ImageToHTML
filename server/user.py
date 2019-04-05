from flask import Blueprint, request, jsonify
import pymongo

user_api = Blueprint('user_api', __name__)
myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["imgtohtml"]
mycol = mydb["user"]


@user_api.route("/login", methods=["POST"])
def login():
    global mycol
    userDetails = request.get_json()
    # try:
    page = mycol.find_one({'name': userDetails['name'], 'password': userDetails['password']})
    print (page)
    if page is None:
        x = {'status': 400, 'error': "User Not found"}
    else:
        x = {'status': 200, 'message': {'name': page['name'], 'email': page['email'], 'role': page['role']}}
    return jsonify(x)

# except:
#   x = {'status': 400, 'error': "User Not found"}
