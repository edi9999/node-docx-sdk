var sdk=require('./sdk'),
	path=require('path'),
	fs=require('fs');

sdk.setKey("a457f87f54a654a87fd89aeff");

stream=fs.createReadStream(path.join(__dirname, 'sample.docx'));
sdk.addTemplate(stream,"sample.docx",
		function(response){console.log(response);}
	);

sdk.getTemplates(function(templates){
	console.log(templates);
})

sdk.getTemplate("sample.docx",function(buffer){
	fs.writeFile("copy.docx",buffer);
});

var tagData={
				"first_name"  : "Glou",
				"last_name"   : "Edgar",
				"phone"       : "0652455478",
				"description" : "New Website"
			}


sdk.generate("sample.docx",tagData,function(buffer) {
	fs.writeFile("generated.docx",buffer);
});
