const amigos = [];
const inputAmigo = document.querySelector('#amigo');
const listaAmigos = document.querySelector('#listaAmigos');
const resultado = document.querySelector('#resultado');
const btnAdicionar = document.querySelector('#btn-adicionar');
const btnSortear = document.querySelector('#btn-sortear');
function adicionarAmigo() {
  const nome = inputAmigo.value.trim();
  if (nome === '') {
    alert('Por favor, digite um nome válido.');
    return;
  }
const existe = amigos.some(a => a.toLowerCase() === nome.toLowerCase());
  if (existe) {
    alert('Este nome já foi adicionado.');
    return;
  }
  amigos.push(nome);
  renderizarLista();
  inputAmigo.value = '';
  inputAmigo.focus();
}
function renderizarLista() {
  listaAmigos.innerHTML = '';
  amigos.forEach(amigo => {
    const li = document.createElement('li');
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}
function sortearAmigo() {
  if (amigos.length < 2) {
    alert('Adicione pelo menos dois amigos para sortear.');
    return;
  }
  const indice = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indice];
  resultado.innerHTML = `<li>O amigo secreto é: <strong>${amigoSorteado}</strong></li>`;
}
btnAdicionar.addEventListener('click', adicionarAmigo);
btnSortear.addEventListener('click', sortearAmigo);