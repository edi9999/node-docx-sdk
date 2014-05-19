var request=require('request');
var key="a457f87f54a654a87fd89aeff"

endpoint="http://localhost:3000/";
request.post(endpoint+"api/templates/?key="+key, function callback (err, httpResponse, body) {
  if (err) {
    return console.error('upload failed:', err);
  }
  console.log('Upload successful!  Server responded with:', body);
});
