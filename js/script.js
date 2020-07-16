var inputName = document.querySelector('#inputCurrentFrequency');
var inputFrequency = document.querySelector('#inputRangeFrequency');
var divPodcast = document.querySelector('#divPodcast');

function start() {
  inputName.value = inputFrequency.value;
  inputFrequency.addEventListener('input', showCurrentFrequency);
}

function showCurrentFrequency(event) {
  var currentFrequency = event.target.value;
  inputName.value = currentFrequency;
  thereIsAPodcast(currentFrequency);
}

function thereIsAPodcast(frequency) {
  for (var i = 0; i < podcasts.length; i++) {
    var currentPodcast = podcasts[i];
    if (currentPodcast.id == frequency) {
      showCurrentPodcast(currentPodcast);
      break;
    } else {
      divPodcast.innerHTML = '<p>Nenhum podcast encontrado.</p>';
    }
  }
}

function showCurrentPodcast(podcast) {
  divPodcast.innerHTML = '';
  var title = document.createElement('h3');
  title.textContent = podcast.title;
  var description = document.createElement('p');
  description.textContent = podcast.description;
  var img = document.createElement('img');
  img.src = './img/' + podcast.img;
  divPodcast.appendChild(img);
  divPodcast.appendChild(title);
  divPodcast.appendChild(description);
}

start();
