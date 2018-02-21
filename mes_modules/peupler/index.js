"use strict"

const tableau = require("./tableaux.js")

/*console.log(tableau.tabVille)
console.log(tableau.tabDomaine)*/

const maxVille = tableau.tabVille.length
const maxDomaine = tableau.tabDomaine.length

const maxNom = tableau.tabNom.length
const maxPrenom = tableau.tabPrenom.length
const maxTelephone = tableau.tabTelephone.length
const maxCourriel = tableau.tabCourriel.length

const peupler = () => {
	/*let positionVille = Math.floor(Math.random() * maxVille)
	let ville = tableau.tabVille[positionVille]

	let positionDomaine = Math.floor(Math.random() * maxDomaine)
	let domaine = tableau.tabDomaine[positionDomaine]*/

	let pNom = Math.floor(Math.random() * maxNom)
	let pPrenom = Math.floor(Math.random() * maxPrenom)
	let pTelephone = Math.floor(Math.random() * maxTelephone)
	let pCourriel = Math.floor(Math.random() * maxCourriel)

	let nom = tableau.tabNom[pNom]
	let prenom = tableau.tabPrenom[pPrenom]
	let telephone = tableau.tabTelephone[pTelephone]
	let courriel = tableau.tabCourriel[pCourriel]

	/*return {
		domaine : domaine,
		ville : ville
	}*/

	return {
		nom : nom,
		prenom : prenom,
		telephone : telephone,
		courriel : courriel
	}
}

module.exports = peupler