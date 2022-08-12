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
const bandMusician = [{
    name: 'Chris Martin',
    instrument: 'Singing/piano',

    name: 'Jonny Buckland',
    instrument: 'Guitar',

    name: 'Guy Berryman',
    instrument: 'Bass',

    name: 'Will Champion',
    instrument: 'Drums'
}]


module.exports = {
    Musician
};