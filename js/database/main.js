const fs = require('fs');
const csv = require('@fast-csv/parse');
const { BaseMot, LettreMot } = require('./Mot');

const stream = fs.createReadStream('data/test.tsv');
csv.parseStream(stream, {headers: true, delimiter: '\t'})
    .on('error', error => console.error(error))
    .on('data', row => console.log(new BaseMot(BaseMot.parseBaseMot(row))))
    .on('end', rowcount => console.log(`Parsed ${rowcount} rows`));

