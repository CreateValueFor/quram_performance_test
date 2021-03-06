const Sequelize = require('sequelize');
const Results = require("./id_card_validation_results")


const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.Results = Results;


Results.init(sequelize)
Results.associate(db);


module.exports = db;
