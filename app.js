// requirements

var mongoose = require("mongoose"); 
var connection = mongoose.createConnection('localhost', 'schemadb');

var schema = require('./schema');
var document = schema.document(mongoose, connection);

document.save(function(err, data){
    console.log('schema appended.');
    process.kill()
  });
