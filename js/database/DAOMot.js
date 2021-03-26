class DAO {
    constructor(path) {

        const { sqlite } = require('sqlite3');
        const { BaseMot, LettreMot } = require('./Mot');

        const { Sequelize,DataTypes } = require('sequelize');
        const sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: path
            });

        this.baseMot = sequelize.define("BaseMot", {
            ID: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true
            },

            phon: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            lemme: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            cgram: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            genre: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            nombre: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            freqlemfilms2: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },

            freqlemlivres: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },

            freqfilms2: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },

            freqlivres: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },

            infover: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            nbhomogr: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            nbhomoph: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            islem: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            nblettres: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            nbphons: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            cvcv: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            p_cvcv: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            voisorth: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            voisphon: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            puorth: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            puphon: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            syll: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            nbsyll: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            cv-cv: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            orthrenv: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            phonrenv: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            orthosyll: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            cgramortho: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            deflem: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            defobs: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            old20: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },

            pld20: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },

            morphoder: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            nbmorph: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        }
    );
        this.lettreMot = sequelize.define("LettreMot", {
                ID: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    primaryKey: true
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
                }
        }
        );



    }
}
