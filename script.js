// h1 { color: red }
// .parrafito { ... }
// #pid { ... }

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
  h1,
  p,
  parrafito,
  pid,
  input,
});

// h1.innerHTML = 'Patito <br> Feo';
// h1.innerText = 'Patito <br> Feo';
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo');

// h1.classList.add('rojo');
// h1.classList.remove('verde');
// h1.classList.toggle('verde');
// h1.classList.contains('verde');

// input.value = "456"

const img = document.createElement('img');
img.setAttribute('src', 'https://img.freepik.com/fotos-premium/hermoso-paisaje-hermosas-plantas-flores_135427-6008.jpg?w=2000');
console.log(img);

pid.innerHTML = "";
pid.appendChild(img);
 

