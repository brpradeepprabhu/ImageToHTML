from flask import Blueprint,request,render_template
from werkzeug import secure_filename
upload_api = Blueprint('upload_api', __name__)
@upload_api.route('/upload')
def upload_file():
   return render_template('uploader.html')
@upload_api.route("/upload",methods = [ 'POST'])
def uploadContent():
    f = request.files['file']
    f.save("uploadimages/"+secure_filename(f.filename))
    return 'file uploaded successfully'