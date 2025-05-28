document.getElementById('todo-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Empêche le rechargement de la page

  const input = document.getElementById('task-input');
  const taskText = input.value.trim();

  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  // Bouton Accomplie
  const btnAccomplie = document.createElement('button');
  btnAccomplie.textContent = '✔';
  btnAccomplie.addEventListener('click', function() {
    li.classList.toggle('accomplie');
  });

  // Bouton Supprimer
  const btnSupprimer = document.createElement('button');
  btnSupprimer.textContent = '✖';
  btnSupprimer.addEventListener('click', function() {
    li.remove();
  });

  li.appendChild(btnAccomplie);
  li.appendChild(btnSupprimer);

  document.getElementById('task-list').appendChild(li);
  input.value = '';
});
