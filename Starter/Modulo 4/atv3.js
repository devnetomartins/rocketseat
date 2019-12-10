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
    listElement.innerHTML = '';
    var user = inputElement.value;
    inputElement.value = '';
    var topic = document.createElement('li');
    var text = document.createTextNode('Carregando...');
    topic.appendChild(text);
    listElement.appendChild(topic);

    var url = user+ '/repos';
    request.get(url)
    .then(function(response){
        renderList(response.data);
    })
    .catch(function(error){
        listElement.innerHTML = '';
        var topic = document.createElement('li');
        var text = document.createTextNode('Usuário inexistente');
        topic.appendChild(text);
        listElement.appendChild(topic);
        console.log(error.response);
    });
}

