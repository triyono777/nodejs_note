const { Sequelize } = require('sequelize');
const dbConfig  =require('../config/db.config');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER,dbConfig.PASSWORD,{
    host:dbConfig.HOST,
    dialect:dbConfig.dialect,
    operatorsAliases:'0',

    pool:{
        max:dbConfig.max,
        min:dbConfig.min,
        acquire:dbConfig.acquire,
        idle:dbConfig.idle,
    }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.notes= require('./note.model')(sequelize,Sequelize);

module.exports = db;