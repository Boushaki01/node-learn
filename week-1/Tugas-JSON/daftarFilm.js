const fs = require('fs');

const text = fs.readFileSync('film.json', 'utf8');
const data = JSON.parse(text);

data.push({id: 4, nama: "Laskar Pelangi (2008)", genre: "Drama, Inspiratif"});
fs.writeFileSync('film.json', JSON.stringify(data, null, 2), 'utf8');

for (let i = 0; i < data.length; i++) {
    console.log((i+1) + ". " + data[i].nama + " - " + data[i].genre);
}

