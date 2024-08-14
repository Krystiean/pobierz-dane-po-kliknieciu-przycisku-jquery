let btnGetData = document.getElementById('btnGetData');
let placeForData = document.getElementById('placeForData');

// metoda $.get()
btnGetData.addEventListener('click', function() {
    $.get('https://akademia108.pl/api/ajax/get-post.php')
        .done(function(res) {
            console.log(res);
            let element = document.createElement('p');
            element.innerHTML = `ID: ${res.id}`;
            placeForData.appendChild(element);
            let element2 = document.createElement('p');
            element2.innerHTML = `UserID: ${res.userId}`;
            placeForData.appendChild(element2);
            let element3 = document.createElement('p');
            element3.innerHTML = `Title: ${res.title}`;
            placeForData.appendChild(element3);
            let element4 = document.createElement('p');
            element4.innerHTML = `Body: ${res.body}`;
            placeForData.appendChild(element4);
        })
        .fail(function(error) {
            console.error(error);
        })
});

// metoda $.getJSON()
btnGetData.addEventListener('click', function() {
    $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
        .done(function(res) {
            console.log(res);
            let element = document.createElement('p');
            element.innerHTML = `ID: ${res.id}`;
            placeForData.appendChild(element);
            let element2 = document.createElement('p');
            element2.innerHTML = `UserID: ${res.userId}`;
            placeForData.appendChild(element2);
            let element3 = document.createElement('p');
            element3.innerHTML = `Title: ${res.title}`;
            placeForData.appendChild(element3);
            let element4 = document.createElement('p');
            element4.innerHTML = `Body: ${res.body}`;
            placeForData.appendChild(element4);
        })
        .fail(function(error) {
            console.error(error);
        })
});