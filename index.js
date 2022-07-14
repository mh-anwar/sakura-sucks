let mode_toggle = document.getElementById('mode');
let character_boxes = document.getElementsByClassName('character');
let darkMode = 0;

function setDarkMode() {
  if (darkMode == 0) {
    document.body.classList.add('dark-mode');
    mode_toggle.textContent = 'Enable Wight Mode';
    darkMode = 1;
  } else {
    document.body.classList.remove('dark-mode');
    mode_toggle.textContent = 'Join the Akatsuki';
    darkMode = 0;
  }
}

mode_toggle.addEventListener('click', setDarkMode);

async function populate_stats() {
  const response = await fetch('./data.json');
  const json = await response.json();
  data = json;
  console.log(data);
  for (let i = 0; i < character_boxes.length; i++) {
    //Naming the variable 'name' is not the _best_ idea
    let name = character_boxes[i].id;
    character = data[name];
    name = toTitleCase(name);
    character_boxes[i].innerHTML += `
            <div class="statistics">
                <h1>${name} Stats</h1>
                <ul>
                    <li>Ninjutsu: ${character.ninjutsu}</li>
                    <li>Taijutsu: ${character.taijutsu}</li>
                    <li>Genjutsu: ${character.genjutsu} </li>
                    <li>Intelligence: ${character.intelligence}</li>
                    <li>Strength: ${character.strength}</li>
                    <li>Speeed: ${character.speed}</li>
                    <li>Stamina ${character.stamina}</li>
                    <li>Hand Seals: ${character.hand_seals}</li>
                    <li>Total Points: ${character.total}</li>
                    <li>Notes: ${character.notes}</li>
                </ul>
            </div>`;
  }
}

function toTitleCase(word) {
  //Simple title-case for  *one* word
  word = word.split('');
  first_letter = word[0].toUpperCase();
  word[0] = '';
  word = first_letter + word.join('');
  return word;
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName('slide');

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex - 1].style.display = 'flex';
}
document.getElementById('next_slide').addEventListener('click', () => {
  plusSlides(1);
});
document.getElementById('prev_slide').addEventListener('click', () => {
  plusSlides(-1);
});

var txt = 'Welcome! This website has 3 Easter Eggs! Try and find them!';
var speed = 50;
let i = 0;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById('welcome').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
populate_stats();
typeWriter();
