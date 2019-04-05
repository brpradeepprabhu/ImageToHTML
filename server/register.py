from flask import Blueprint,request,jsonify
import pymongo
register_api = Blueprint('register_api', __name__)
myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["imgtohtml"]
mycol = mydb["user"]
@register_api.route("/register",methods=['POST'])
def register():
    global mycol
    try:
        registerData= request.get_json()
        insert = mycol.insert_one(registerData)
        x = {'status':200,'message':"Inserted successfully"}
    except:
        x = {'status':400,'error':"Not inserted"}

    return jsonify(x)