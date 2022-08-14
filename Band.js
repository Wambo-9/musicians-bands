const {db} = require('./db');
const {DataTypes} = require('sequelize'); 

const Band = db.define('band', {
    name: {
        type: DataTypes.STRING
    }, 
    genre: {
        type: DataTypes.STRING
    }
})

module.exports = {
    Band
};