// display prompt
var favouriteSong = prompt('What is your favourite Song or Movie?')
var loading = document.querySelector('#loading')
//display loader
loading.style.display = 'block'
//using ajax looking for data typed in
$.ajax({
    url: 'https://itunes.apple.com/search',
    data: {
        term: favouriteSong
    },
    dataType: 'jsonp',
    success: function (data) {
		//hide loader 
        loading.style.display = 'none'
        renderResults(data)
    }
})


function renderResults(data) {
    var ol = document.querySelector('#results')
    console.log(data)
// create new Element inside ol
    data.results.forEach(function (song) {
        var li = document.createElement('li')
        var h3 = document.createElement('h3')
        var h2 = document.createElement('h2')
        var h1 = document.createElement('h1')
        var img = document.createElement('img')
        var audio = document.createElement('audio')
            var genre = document.createElement('p')
        console.log(song)

// Input data from API itunes
        h1.textContent = song.kind
        h2.textContent = song.trackName
        h3.textContent = song.artistName
        img.src = song.artworkUrl100
        audio.src = song.previewUrl
        audio.controls = true
        audio.preload = "none"
        genre.textContent = song.primaryGenreName

//appendChild 
        li.appendChild(h1)
        li.appendChild(img)
        li.appendChild(h2)
        li.appendChild(h3)
        li.appendChild(genre)
        li.appendChild(audio)
        ol.appendChild(li)
    })
}