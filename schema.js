exports.document = function(mongoose, connection){
    var Schema = mongoose.Schema;
        //ObjectId = Schema.ObjectId;
    
    // schema
    var schema = new Schema({
        title : {
            type : String,
            default : 'My new schema',
            enum : ['New schema', 'cool schema']
        },
        created : {
            type : Date,
            default : Date.now
        }
    });

    // our model based on schema
    var model = connection.model('firstModel', Spider);

    // document is derived object
    return new model({ });

}


