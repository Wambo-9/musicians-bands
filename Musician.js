const {db} = require('./db');
const{DataTypes} = require('sequelize')

// TODO - define the Musician model
const Musician = db.define('musician', {
    name: {
        type: DataTypes.STRING
    }, 
    instrument: {
        type: DataTypes.STRING
    }
})

module.exports = {
    Musician
};