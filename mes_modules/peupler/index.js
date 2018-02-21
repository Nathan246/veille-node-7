"use strict"

const tableau = require("./tableaux.js")

console.log(tableau.tabVille)
console.log(tableau.tabDomaine)

const maxVille = tableau.tabVille.length
const maxDomaine = tableau.tabDomaine.length

const peupler = () => {
	console.log("ok")
	let positionVille = Math.floor(Math.random() * maxVille)
	let ville = tableau.tabVille[positionVille]

	let positionDomaine = Math.floor(Math.random() * maxDomaine)
	let domaine = tableau.tabDomaine[positionDomaine]

	return {
		domaine : domaine,
		ville : ville
	}
}

module.exports = peupler