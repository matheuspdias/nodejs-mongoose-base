const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const modelSchema = new mongoose.Schema({
    name: String,
    email: String
});

const modelName = 'User';

// SE NÃO EXISTIR O MODEL CRIA. CASO CONTRARIO REAPROVEIRA O MODEL
if(mongoose.connection && mongoose.connection.models[modelName]) {
    module.exports = mongoose.connection.models[modelName];
} else {
    module.exports = mongoose.model(modelName, modelSchema);
}