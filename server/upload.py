from flask import Blueprint,request,render_template,jsonify
from flask_cors import CORS, cross_origin
from werkzeug import secure_filename
upload_api = Blueprint('upload_api', __name__)
@upload_api.route('/upload')
def upload_file():
   return render_template('uploader.html')
@upload_api.route("/upload",methods = [ 'POST'])
@cross_origin()
def uploadContent():
    print("here",request.files)
    f = request.files['file']
    f.save("uploadimages/"+secure_filename(f.filename))
    print(f.filename)
    return jsonify({'message':'file uploaded successfully'}) 