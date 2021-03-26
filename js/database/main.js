const fs = require('fs');
const csv = require('@fast-csv/parse');
const { sqlite } = require('sqlite3');
const { BaseMot } = require('./Mot');

const { Sequelize,DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'data/testDB.sqlite'
    });

const stream = fs.createReadStream('data/test.tsv');
csv.parseStream(stream, {headers: true, delimiter: '\t'})
    .on('error', error => console.error(error))
    .on('data', row => console.log(new BaseMot(row)))
    .on('end', rowcount => console.log(`Parsed ${rowcount} rows`));