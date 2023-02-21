// ---------------------------------- set timeout

// const test = () => {
//     console.log('tree');
// }

// setTimeout(test, 5000)

// set interval

// setInterval(test, 500)

// ---------------------------------- alert - tego sie nie uzywa

// alert('czesc')

// confirm - tego sie uzywa

// if (confirm('chcesz ?')) {
//     console.log('ok');
// } else {
//     console.log('nie to nie');
// }

// prompt

// const name = prompt('Czesc, jak masz na imię?', 'Ania')
// console.log(`Czesc ${name}`);

// ----------------------------------- object math

// console.log(Math.PI);

// console.log(Math.max(5,10));
// console.log(Math.min(5,10));

// const number = Math.random() * 10
// // 0-1

// console.log(Math.floor(number));

// ----------------------------------- attribute

// const link = document.querySelector('a')
// const img = document.querySelector('img')
// const p = document.querySelector('p')

// link.setAttribute('href', '#')
// link.setAttribute('target', '_blank')
// // dodaje / ustawia nowy atrybut i przypisuje do niego wartosc

// console.log(img.getAttribute('alt'));
// // pobiera wartosc, ktora jest przypisana do danego atrybutu

// console.log(p.hasAttribute('style'));
// //  sprawdzamy, czy mamy jakis atrybut

// p.removeAttribute('style')
// usuwa wskazany atrybut z DOM

// ----------------------------------- data-attribute

// const divTag = document.querySelector('[data-number="23"]')
// console.log(divTag.dataset.number);
// console.log(divTag.dataset.moreInfo);

// ----------------------------------- family

// const grandpa = document.querySelector('.grandparent')
// console.log(grandpa.querySelector('.parent'));
// console.log(grandpa.querySelectorAll('.child'));

// const middleChild = document.querySelector('middle-child')
// console.log(middleChild);
// const prevSibling = middleChild.previousElementSibling
// console.log(prevSibling);

// const nextSibling = middleChild.nextElementSibling
// console.log(nextSibling);

// const parentEl = middleChild.parentElement.parentElement.parentElement
// console.log(parentEl);

// console.log(middleChild.closet('.grandparent'));

// ----------------------------------- Task 3.0

const img = document.querySelector('img')

img.setAttribute('src', 'https://unsplash.it/600/400')
img.setAttribute('alt', 'losowy obrazek z internetów')

const test = () => {
    console.log(object);
}

setTimeout(test, 2000)


// ----------------------------------- Bug #009