var container = document.querySelector('div#app');
var buttonElement = document.querySelector('div#app button');
var inputElement = document.querySelector('div#app input');
var listElement = document.createElement('ul');
container.appendChild(listElement);
var request = axios.create({
    baseURL: 'https://api.github.com/users/'
  });

function renderList(repos){
    listElement.innerHTML = '';

    for(rep of repos){
        var topic = document.createElement('li');
        var text = document.createTextNode(rep.name);

        topic.appendChild(text);
        listElement.appendChild(topic);
    }
}

buttonElement.onclick = function(){
    var user = inputElement.value;
    inputElement.value = '';
    var url = user+ '/repos';
    request.get(url)
    .then(function(response){
        renderList(response.data);
    })
    .catch(function(error){
        console.log(error.response);
    });
}

