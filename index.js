var request=require('request'),
	fs=require('fs'),
	path=require('path');
var key="a457f87f54a654a87fd89aeff"

endpoint="http://localhost:3000/";
r=request.post(endpoint+"api/templates/?key="+key, function callback (err, httpResponse, body) {
  if (err) {
    return console.error('upload failed:', err);
  }
  console.log('Upload successful!  Server responded with:', body);
});

var form = r.form()
form.append('file', fs.createReadStream(path.join(__dirname, 'sample.docx')))
