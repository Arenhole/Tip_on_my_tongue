class BaseMot {
    constructor(mot){
        Object.assign(this, mot);
    }

    static parseBaseMot(object){
        const toNumberize = ['freqlemfilms2','freqlemlivres','freqfilms2','freqlivres','nbhomogr','nbhomoph','islem',
                            'nblettres','nbphons','voisorth','voisphon','puorth','puphon','nbsyll','deflem','defobs',
                            'old20','pld20','nbmorph'];
        toNumberize.forEach(elem => object[elem] = object[elem] != '' && Number(object[elem]) != NaN ? Number(object[elem] ): 0 );
        return object;
    }
}

class LettreMot {

    static customCharValues = {
        "a" : 0,
        "b" : 1,
        "c" : 2,
        "d" : 3,
        "e" : 4,
        "f" : 5,
        "g" : 6,
        "h" : 7,
        "i" : 8,
        "j" : 9,
        "k" : 10,
        "l" : 11,
        "m" : 12,
        "n" : 13,
        "o" : 14,
        "p" : 15,
        "q" : 16,
        "r" : 17,
        "s" : 18,
        "t" : 19,
        "u" : 20,
        "v" : 21,
        "w" : 22,
        "x" : 23,
        "y" : 24,
        "z" : 25,
        "à" : 26,
        "â" : 27,
        "æ" : 28,
        "ç" : 29,
        "è" : 30,
        "é" : 31,
        "ê" : 32,
        "ë" : 33,
        "î" : 34,
        "ï" : 35,
        "ô" : 36,
        "œ" : 37,
        "ù" : 38,
        "û" : 39,
        "ü" : 40,
        "ÿ" : 41,
        " " : 42,
        "-" : 43
    }

    constructor(mot){
        this.mot = mot;
        this.lettres = Array.apply(null, Array(44)).map(e => 0);
        mot.split('').forEach(char => this.letters[LettreMot.customCharValues[char]] += 1);
    }
}

module.exports = {BaseMot, LettreMot};