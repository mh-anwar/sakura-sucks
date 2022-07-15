let mode_toggle = document.getElementById('mode');
let character_boxes = document.getElementsByClassName('character');
let surprise = document.getElementById('sakura_surprise');
let mode = 0;
let slideIndex = 1;
var twCounter = 0;
var typeWriterText = `Enjoy comparing Sakura to other characters and finding Easter Eggs! (Note: this is best viewed on a PC)`;
var typeWriterElement = document.getElementById('welcome');
let agent = navigator.userAgent;
if (agent.includes('Safari')) {
  alert(
    "Why...why are you using Safari. Anyway, this website doesn't work well with this horrible browser, so you may want to switch."
  );
}

function setMode() {
  if (mode == 0) {
    document.body.style.backgroundImage = 'url(./images/akatsuki.jpg)';
    mode_toggle.textContent = 'Enable Wight Mode';
    mode = 1;
  } else {
    document.body.style.backgroundImage = '';
    mode_toggle.textContent = 'Join the Akatsuki';
    mode = 0;
  }
}

async function populate_stats() {
  const response = await fetch('./data.json');
  const json = await response.json();
  data = json;
  for (let i = 0; i < character_boxes.length; i++) {
    //Naming the variable 'name' is not the _best_ idea
    let name = character_boxes[i].id;
    character = data[name];
    name = toTitleCase(name);
    //Hardcoded for now
    if (name == 'Sakura') {
      character_boxes[i].innerHTML += `
   
      <div class="statistics">
            <h1>${name}</h1>
            <ul>
                <li>Ninjutsu: ${character.ninjutsu}</li>
                <li>Taijutsu: ${character.taijutsu}</li>
                <li>Genjutsu: ${character.genjutsu} </li>
                <li>Intelligence: ${character.intelligence}</li>
                <li>Strength: ${character.strength}</li>
                <li>Speeed: ${character.speed}</li>
                <li>Stamina ${character.stamina}</li>
                <li>Hand Seals: ${character.hand_seals}</li>
                <b><li>Total Points: ${character.total}</li></b>
                <br>
                <li>Notes: ${character.notes}</li>
                <br>
                <li>Giant Forehead ✅</li>
                <li>Minute Brain ✅</li>
                <li>Knows One Jutsu: 泣く柔術 (Crying no Jutsu) ✅</li>
                <li>Seems Like Failure ✅</li>
                <li>Looks Like Failure ✅</li>
                <li>Failure</li>
            </ul>
      </div>`;
    } else {
      character_boxes[i].innerHTML += `
            <div class="statistics">
                <h1>${name}</h1>
                <ul>
                    <li>Ninjutsu: ${character.ninjutsu}</li>
                    <li>Taijutsu: ${character.taijutsu}</li>
                    <li>Genjutsu: ${character.genjutsu} </li>
                    <li>Intelligence: ${character.intelligence}</li>
                    <li>Strength: ${character.strength}</li>
                    <li>Speeed: ${character.speed}</li>
                    <li>Stamina ${character.stamina}</li>
                    <li>Hand Seals: ${character.hand_seals}</li>
                    <b><li>Total Points: ${character.total}</li></b>
                    <br>
                    <li>Notes: ${character.notes}</li>
                </ul>
            </div>`;
    }
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

function typeWriter() {
  var speed = 50;
  if (twCounter == 0) {
    typeWriterElement.innerHTML = '';
  }
  if (twCounter < typeWriterText.length) {
    typeWriterElement.append(typeWriterText.charAt(twCounter));
    twCounter++;
    setTimeout(typeWriter, speed);
  }
}

function sakuraSurprise() {
  let box = document.createElement('div');
  box.id = 'surprise';
  box.className = 'sakura-surprise';
  document.body.prepend(box);

  let rand_num = Math.floor(Math.random() * 8 + 1);
  box.style.backgroundImage = 'url(./images/sakura-me/' + rand_num + '.jpeg)';
  showSnackbar();
  moveSakura();
}

function moveSakura() {
  let surprise = document.getElementById('surprise');
  surprise.style.bottom = parseFloat(surprise.style.bottom || 0) + 100 + 'px';
  pos_bottom = surprise.style.bottom;
  pos_bottom = pos_bottom.replace('px', '');
  if (pos_bottom < 1000) {
    setTimeout(moveSakura, 500);
  } else {
    document.body.removeChild(document.getElementById('surprise'));
  }
}

function showSnackbar() {
  let snackbar = document.getElementById('snackbar');
  snackbar.className = 'show';
  setTimeout(function () {
    snackbar.className = snackbar.className.replace('show', '');
  }, 3000);
}

mode_toggle.addEventListener('click', setMode);
showSlides(slideIndex);
document.getElementById('next_slide').addEventListener('click', () => {
  plusSlides(1);
});
document.getElementById('prev_slide').addEventListener('click', () => {
  plusSlides(-1);
});
surprise.addEventListener('click', sakuraSurprise);
populate_stats();
typeWriter();
document.onkeypress = function (e) {
  document.getElementById('title_input').set;
};
