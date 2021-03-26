const fs = require('fs');
const csv = require('@fast-csv/parse');
const { sqlite } = require('sqlite3');
const { BaseMot, LettreMot } = require('./Mot');

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

const mot = sequelize.define("BaseMot", {
        ID: {
                       type: DataTypes.STRING,
                       allowNull: false,
                       primaryKay: true
                       },
        lettreA: {
                       type: DataTypes.INTEGER,
                       allowNull: false
                       },
        lettreB: {
                               type: DataTypes.INTEGER,
                               allowNull: false
                               },
        lettreC: {
                               type: DataTypes.INTEGER,
                               allowNull: false
                               },
        lettreD: {
                               type: DataTypes.INTEGER,
                               allowNull: false
                               },
        lettreE: {
                               type: DataTypes.INTEGER,
                               allowNull: false
                               },
        lettreF: {
                               type: DataTypes.INTEGER,
                               allowNull: false
                               },
        lettreG: {
                               type: DataTypes.INTEGER,
                               allowNull: false
                               },
        lettreH: {
                               type: DataTypes.INTEGER,
                               allowNull: false
                               },
        lettreI: {
                               type: DataTypes.INTEGER,
                               allowNull: false
                               },
        lettreJ: {
                               type: DataTypes.INTEGER,
                               allowNull: false
                               },
        lettreK: {
                               type: DataTypes.INTEGER,
                               allowNull: false
                               },
        lettreL: {
                               type: DataTypes.INTEGER,
                               allowNull: false
                               },
        lettreM: {
                               type: DataTypes.INTEGER,
                               allowNull: false
                               },
        lettreN: {
                               type: DataTypes.INTEGER,
                               allowNull: false
                               },
        lettreO: {
                               type: DataTypes.INTEGER,
                               allowNull: false
                               },
        lettreP: {
                               type: DataTypes.INTEGER,
                               allowNull: false
                               },
        lettreQ: {
                               type: DataTypes.INTEGER,
                               allowNull: false
                               },
        lettreR: {
                               type: DataTypes.INTEGER,
                               allowNull: false
                               },
        lettreS: {
                               type: DataTypes.INTEGER,
                               allowNull: false
                               },
        lettreT: {
                               type: DataTypes.INTEGER,
                               allowNull: false
                               },
        lettreU: {
                       type: DataTypes.INTEGER,
                       allowNull: false
                       },
        lettreV: {
                       type: DataTypes.INTEGER,
                       allowNull: false
                       },
        lettreW: {
                       type: DataTypes.INTEGER,
                       allowNull: false
                       },
        lettreX: {
                       type: DataTypes.INTEGER,
                       allowNull: false
                       },
        lettreY: {
                       type: DataTypes.INTEGER,
                       allowNull: false
                       },
        lettreZ: {
                       type: DataTypes.INTEGER,
                       allowNull: false
                       },
        lettreAcirconflexe: {
                       type: DataTypes.INTEGER,
                       allowNull: false
                       },
        lettreAgrave: {
                       type: DataTypes.INTEGER,
                       allowNull: false
                       },
        lettreAligature: {
                       type: DataTypes.INTEGER,
                       allowNull: false
                       },
        lettreEaigu: {
                       type: DataTypes.INTEGER,
                       allowNull: false
                       },
        lettreEcirconflexe: {
                       type: DataTypes.INTEGER,
                       allowNull: false
                       },
        lettreEgrave: {
                       type: DataTypes.INTEGER,
                       allowNull: false
                       },
        lettreEtrema: {
                       type: DataTypes.INTEGER,
                       allowNull: false
                       },
        lettreYtrema: {
                       type: DataTypes.INTEGER,
                       allowNull: false
                       },
        lettreUcirconflexe: {
                       type: DataTypes.INTEGER,
                       allowNull: false
                       },
        lettreUgrave: {
                       type: DataTypes.INTEGER,
                       allowNull: false
                       },
        lettreUtrema: {
                       type: DataTypes.INTEGER,
                       allowNull: false
                       },
        lettreIcirconflexe: {
                       type: DataTypes.INTEGER,
                       allowNull: false
                       },
        lettreItrema: {
                       type: DataTypes.INTEGER,
                       allowNull: false
                       },
        lettreOcirconflexe: {
                       type: DataTypes.INTEGER,
                       allowNull: false
                       },
        lettreOligature: {
                       type: DataTypes.INTEGER,
                       allowNull: false
                       },
        lettreSpaces: {
                       type: DataTypes.INTEGER,
                       allowNull: false
                       },
        lettreDash: {
                       type: DataTypes.INTEGER,
                       allowNull: false
                       },



}
)