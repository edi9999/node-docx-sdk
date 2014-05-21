var sdk=require('./sdk'),
	path=require('path'),
	fs=require('fs');

sdk.setKey("a457f87f54a654a87fd89aeff");
sdk.addTemplate(path.join(__dirname, 'sample.docx'));

sdk.getTemplates(function(body){
	console.log(body);
})

var tagData={
				"first_name"  : "Hipp",
				"last_name"   : "Edgar",
				"phone"       : "0652455478",
				"description" : "New Website"
			}

sdk.getTemplate("sample.docx",function(buffer){
	fs.writeFile("copy.docx",buffer);
});

sdk.generate("sample.docx",tagData,function(buffer) {
	fs.writeFile("generated.docx",buffer);
});
