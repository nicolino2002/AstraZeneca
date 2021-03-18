const path = require('path');
const fs = require('fs');

// check if file exists: fs.existsSync('/path/to/file')
/*
	Aggiungi un oggetto alla variabile "obj" qui sotto per aggiungere un entry point
	- chiave -> il nome del bundle che vogliamo ottenere
	(e che avrà la forma nomeBundle.bundle.js)
	- valore -> il percorso del file javascript sorgente
*/

const obj = {
	index: path.join(path.resolve(__dirname, 'src/js'), 'index.js'),
	home: path.join(path.resolve(__dirname, 'src/js'), 'home.js'),
	contact: path.join(path.resolve(__dirname, 'src/js'), 'contact.js'),
	chisiamo: path.join(path.resolve(__dirname, 'src/js'), 'chisiamo.js'),
	prenota: path.join(path.resolve(__dirname, 'src/js'), 'prenota.js'),


}

module.exports = obj
