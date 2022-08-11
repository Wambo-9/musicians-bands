const path = require('path');
const { Sequelize } = require('sequelize');

// TODO - create the new sequelize connection

const db = new Sequelize({
    dialect: 'sqlite', 
    storage:'./data.sqlite'
})
module.exports = {
   db
};
