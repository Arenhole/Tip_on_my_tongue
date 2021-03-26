class BaseMot {
    constructor(word){
        Object.assign(this, word);
    }
}

class LettreMot {
    constructor(word){
        this.lettreA = 0;
        this.lettreB = 0;
        this.lettreC = 0;
        this.lettreD = 0;
        this.lettreE = 0;
        this.lettreF = 0;
        this.lettreG = 0;
        this.lettreH = 0;
        this.lettreI = 0;
        this.lettreJ = 0;
        this.lettreK = 0;
        this.lettreL = 0;
        this.lettreM = 0;
        this.lettreN = 0;
        this.lettreO = 0;
        this.lettreP = 0;
        this.lettreQ = 0;
        this.lettreR = 0;
        this.lettreS = 0;
        this.lettreT = 0;
        this.lettreU = 0;
        this.lettreV = 0;
        this.lettreW = 0;
        this.lettreX = 0;
        this.lettreY = 0;
        this.lettreZ = 0;
        this.lettreAgrave = 0;
        this.lettreAcirconflexe = 0;
        this.lettreAligature = 0;
        this.lettreCcedille = 0;
        this.lettreEaigu = 0;
        this.lettreEgrave = 0;
        this.lettreEcirconflexe = 0;
        this.lettreEtrema = 0;
        this.lettreIcirconflexe = 0;
        this.lettreItrema = 0;
        this.lettreOcirconflexe = 0;
        this.lettreOligature = 0;
        this.lettreUgrave = 0;
        this.lettreUcirconflexe = 0;
        this.lettreUtrema = 0;
        this.lettreYtrema = 0;

        for(const i = 0; i < word.length; i++){

        }
    }
}

module.exports = {BaseMot};