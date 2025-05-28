
const maDiv = document.createElement('div');
maDiv.className = 'maDiv';


const monParagraphe = document.createElement('p');
monParagraphe.textContent = 'Ceci est un paragraphe';


maDiv.appendChild(monParagraphe);


document.body.appendChild(maDiv);


monParagraphe.textContent = 'Le texte a été modifié';


monParagraphe.style.backgroundColor = 'lightblue';
monParagraphe.style.textAlign = 'center';


maDiv.addEventListener('click', () => {
  monParagraphe.textContent = 'Un clic a été détecté';
});
