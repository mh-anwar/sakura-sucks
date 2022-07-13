let mode_toggle = document.getElementById('mode');
let main_box = document.getElementById('mainBox');
let character_boxes = document.getElementsByClassName('character');
let darkMode = 0;

function setDarkMode() {
  if (darkMode == 0) {
    document.body.classList.add('dark-mode');
    mode_toggle.textContent = 'Disable Dark Mode';
    darkMode = 1;
  } else {
    document.body.classList.remove('dark-mode');
    mode_toggle.textContent = 'Enable Wight Mode';
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
    character_name = character_boxes[i].id;

    character = data[character_name];
    character_boxes[i].innerHTML += `
            <div class="statistics">
                <h1>Statistics</h1>
                <ul>
                    <li>Ninjutsu: ${character.ninjutsu}</li>
                    <li>Taijutsu: ${character.taijutsu}</li>
                    <li>Genjutsu: ${character.genjutsu} </li>
                    <li>Intelligence: ${character.intelligence}</li>
                    <li>Strength: ${character.strength}</li>
                    <li>Speeed: ${character.speed}</li>
                    <li>Stamina ${character.stamina}</li>
                    <li>Hand Seals: ${character.hand_seals}</li>
                </ul>
            </div>`;
  }
}
populate_stats();
