var PUBLIC_KEY = '59d1ee8809c037fcc9e17d06b49a1ad7';
var PRIV_KEY = '3447130bed5a6453b8a6c29bdc628e3c2c8d64a1';

function getMarvelResponse(characterName) {

  var ts = new Date().getTime();
  var hash = md5(ts + PRIV_KEY + PUBLIC_KEY).toString();
  var url = 'http://gateway.marvel.com:80/v1/public/characters';

  $.getJSON(url, {
    ts: ts,
    apikey: PUBLIC_KEY,
    hash: hash,
    name: characterName,
  })
    .done(function(response) {
        
        characterData(response.data.results[0]);
    })
    .fail(function(err){
      //console.log(err);
    });
};

var fighter = document.querySelector('.wonder_woman');

getMarvelResponse("Iron Man");

function characterData(character){
    console.log(character);

var characterDiv = document.createElement('div');

var characterImage = document.createElement('img');
characterImage.src = character.thumbnail.path + "." + character.thumbnail.extension;
characterDiv.appendChild(characterImage);





fighter.appendChild(characterDiv); 
}

