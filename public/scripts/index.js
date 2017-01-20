document.addEventListener('DOMContentLoaded', main);

function main () {
  const arr = [
    'software engineer', 
    'full-stack',
    'front-end',
    'back-end',
    'angular',
    'react',
    'node.js',
    'express',
    'restful apis',
    'graphql',
    'sockets.io',
    'continuous integration',
    'continuous delivery',
    'tdd',
    'microservices',
    'postgresql',
    'mysql',
    'mongodb',
    'aws',
    'web apis',
    'oAuth',
    'agile',
    'docker',
    'ansible',
    'vagrant',
    'javascript',
    'arduino',
    'machine learning',
    'gulp',
    'webpack',
    'scaling',
    '"server-less"  archetecture',
    'electron'
  ];
  typeWords(jumbleArray(arr));
  cursorToggle();
}

function typeWords(words, ind = 0) {
  if (words.length === ind) {
    ind = 0;
  }
  typeWord(words[ind].toUpperCase(), typeWords.bind(this, words, ++ind));
}

function typeWord(word, callback, letterInd = 0) {
  if (letterInd === word.length * 2) {
    return callback();
  }
  function afterDelay () {
    if (letterInd < word.length) {
      typeLetter(word[letterInd]);
    } else {
      removeLetter();
    }
    typeWord(word, callback, ++letterInd);
  }
  const delay = letterInd === word.length ? 3000 : 100;
   setTimeout(afterDelay, delay); 
}

function typeLetter(letter) {
  const root = document.getElementById('attribute');

  const frag = document.createDocumentFragment();
  const elem = document.createElement('span');
  elem.textContent = letter;

  frag.appendChild(elem);
  root.appendChild(frag);
}

function removeLetter() {
   const root = document.getElementById('attribute');
   root.lastChild.remove();
}

function jumbleArray (arr) {
  let newArr = arr.splice(0, 1);
  for (;  arr.length > 0; ) {
    const randIndex = Math.floor(Math.random() * (arr.length - 1));
   newArr =  newArr.concat(arr.splice(randIndex, 1));
  }
  return newArr;
}

function cursorToggle (toggleOn = true) {
  const cursorRoot = document.getElementById('cursor');
  if (toggleOn) {
    const elem = document.createElement('span');
    elem.textContent = '|';
    cursorRoot.appendChild(elem);
  } else {
    cursorRoot.lastChild.remove();
  }
  setTimeout(cursorToggle.bind(this, !toggleOn), 1000);
}