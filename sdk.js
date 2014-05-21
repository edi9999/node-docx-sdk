var request=require('request'),
	fs=require('fs');

SDK={};

var endpoint="http://localhost:3000/api";
var secretKey=null;

SDK.setKey=function(key){
	secretKey=key;
	return SDK;
}

SDK.addTemplate=function(path,addTemplateCallback){
	r=request.post(endpoint+"/templates/?key="+secretKey, function (err, httpResponse, body) {
  	  if (err) {
    	return console.error('upload failed:', err);
  	  }
  	  console.log('Upload successful!  Server responded with:', body);
	  if ( addTemplateCallback!=undefined ) {
	  	  addTemplateCallback();
	  }
	});

	var form = r.form()
	form.append('file', fs.createReadStream(path))
	return SDK;
}

SDK.getTemplates=function(getTemplatesCallback) {
	r=request.get(endpoint+"/templates/?key="+secretKey, function (err, httpResponse, body) {
		getTemplatesCallback(body);
	});
}

SDK.getTemplate=function(template,getTemplateCallback) {
	r=request({method:"GET",url:endpoint+"/templates/"+template+"?key="+secretKey,encoding:'binary'}, function (err, httpResponse, body) {
		buffer=new Buffer(body,'binary')
		getTemplateCallback(buffer);
	});
}

SDK.generate=function(template,data,generateCallback){
	r=request({method:"POST",url:endpoint+"/generate/"+template+"?key="+secretKey,json:data,encoding:'binary'}, function (err, httpResponse, body) {
		buffer=new Buffer(body,'binary')
		generateCallback(buffer);
	});
}

module.exports=SDK;
