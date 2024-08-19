// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');


function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

// 2. RAW TEXT STRINGS

const storyText = 
  'Tá fazendo :insertx: lá fora e\n' +
  'Acredito que a programação pode fornecer coisas incríveis,\n' +
  'como aplicações Web, por exemplo.\n' +
  'Bob gosta de frameworks como :insertx:,\n' +
  'que oferecem formas de resolver problemas e transformar ideias em aplicações.\n' +
  'Também gosto de jogos de luta como :inserty:,\n' +
  'e me divirto jogando algum desses jogos.\n' +
  'Além disso, possuo algumas habilidades culinárias;\n' +
  'já fiz comidas como :insertz:.';

const insertX = [
  'Vue',
  'React',
  'Angular'
];

const insertY = [
  'Street Fighter',
  'Mortal Kombat',
  'The King Of Fighters',
  'Tekken'
];

const insertZ = [
  'Lasanha',
  'Risotto',
  'Bife acebolado'
];

const xItem =  randomValueFromArray(insertX);
const yItem = randomValueFromArray(insertY);
const zItem = randomValueFromArray(insertZ);


// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
function result() {

  let newStory = storyText;

  newStory = newStory.replace(':insertx:', xItem).replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.0714) + ' stone';
    const temperature =  Math.round((94 - 32) * (5 / 9)) + ' centigrade';
    newStory = newStory.replace('300 pound', weight);
    newStory = newStory.replace('94 fahrenheit', temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

randomize.addEventListener('click', function () {
  console.log('Olá, eu fui clicado');
  result();
});
