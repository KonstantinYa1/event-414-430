// 414 1

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
//     console.log(event); // увидим объект с событием
// });

// 415 1

// let elem = document.querySelector('#elem');		
// window.addEventListener('mousemove', function(event) {
// 	elem.innerHTML = event.pageX + ':' + event.pageY;
// });

// 416 1

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', func);
// elem.addEventListener('dblclick', func);

// function func(event) {
//     if (event.type === 'click') {
//         elem.style.backgroundColor = 'green';
//     }
// 	else if (event.type === 'dblclick') {
//         elem.style.backgroundColor = 'red';
//     }

// }

// 417 1

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function(event) { 
//     if (event.target.tagName === 'LI') { 
//         event.target.textContent += '!'; 
//     } 
//     else if (event.target.tagName === 'UL') { 
//         console.log('Клик был по тегу ul'); 
//     } });


// 418 1

//   let inputField = document.getElementById('input-field');
//   inputField.addEventListener('input', function(event) {
//     let inputValue = event.target.value;
//     let keyCode = event.keyCode;
//     let key = event.key;
//     console.log(`Введен символ: ${inputValue}`);
//     console.log(`Код клавиши: ${keyCode}`);
//     console.log(`Нажатая клавиша: ${key}`);
//   });

// 418 2

//   let inputField = document.getElementById('input-field');
//   inputField.addEventListener('keydown', function(event) {
//     let keyCode = event.keyCode;
//     console.log(`Код клавиши: ${keyCode}`);
//   });

// 418 3

//   let inputField = document.getElementById('input-field');
//   inputField.addEventListener('keydown', function(event) {
//     if (event.keyCode === 13) {
//       console.log(`Код клавиши: ${event.keyCode} (Enter)`);
//     }
//   });


// 418 4

//   let inputField = document.getElementById('input-field');
//   inputField.addEventListener('keydown', function(event) {
//     if (event.keyCode === 8) {
//       console.log(`Код клавиши: ${event.keyCode} (Backspace)`);
//     }
//   });


// 419 1

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(event) {
// 	if (event.altKey) {
//         elem.style.backgroundColor = 'red';
// 	}
// });

// 420 1

//   let elem = document.querySelector('#elem');
//   elem.addEventListener('click', function(event) {
//     event.preventDefault();
//     console.log(`Ссылка: ${elem.href}`);
//   });

// 421 1

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');

// elem1.addEventListener('click', function() {
// 	alert('зеленый');
// });
// elem2.addEventListener('click', function() {
// 	alert('голубой');
// });
// elem3.addEventListener('click', function() {
// 	alert('красный');
// });

// 422 1

//   let div = document.querySelector('div');
//   div.addEventListener('click', function(event) {
//     if (event.target.tagName === 'DIV') {
//       console.log('Клик был сделан внутри div');
//     } else if (event.target.tagName === 'UL') {
//       console.log('Клик был сделан внутри ul');
//     } else if (event.target.tagName === 'LI') {
//       console.log('Клик был сделан внутри li');
//     }
//   });

// 427

// elem1.addEventListener('click', function() {
// 	console.log('зеленый - погружение');
// }, true);
// elem1.addEventListener('click', function() {
// 	console.log('зеленый - всплытие');
// }, false);

// elem2.addEventListener('click', function() {
// 	console.log('голубой - погружение');
// }, true);
// elem2.addEventListener('click', function() {
// 	console.log('голубой - всплытие');
// }, false);

// elem3.addEventListener('click', function() {
// 	console.log('красный - погружение');
// }, true);
// elem3.addEventListener('click', function() {
// 	console.log('красный- всплытие');
// }, false);

// 429 

// list.addEventListener('click', function(event) {
// 	console.log(ul);         // наш список
// 	console.log(event.target); // пункт списка
// });

// list.addEventListener('click', function(event) {
// 	event.target.textContent = event.target.textContent + '!';
// });

// 430

// let list   = document.querySelector('ul');

// list.addEventListener('click', function(event) {
// 	let li = event.target.closest('li');
	
// 	if (li) {
// 		li.textContent = '!';
// 	}
// });
