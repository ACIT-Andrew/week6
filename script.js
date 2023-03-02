const firstList = document.querySelector('.CIT-list');
const secondList = document.querySelector('.CST-list');

const newItem = document.createElement('li');

newItem.textContent = 'test';

firstList.appendChild(newItem);
secondList.appendChild(newItem);