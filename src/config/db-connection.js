const mongoose = require('mongoose');
const config = require('./');

const db = () => {
	
	const mongoConfig = {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify:false
	}

    mongoose.connect(config.database, mongoConfig)
        .then(() => {
		    console.log('Conectado a mongo!');

		    const ObjectId = mongoose.Types.ObjectId;
		    ObjectId.prototype.valueOf = function() {
			return this.toString();
		};
		console.log(`🚀 Server ready at http://localhost:${config.PORT}`)
	});
};

module.exports = db;