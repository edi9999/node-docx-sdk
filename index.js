var sdk=require('./sdk'),
	path=require('path');

sdk.setKey("a457f87f54a654a87fd89aeff");
sdk.addTemplate(path.join(__dirname, 'sample.docx'));


sdk.listTemplates()
