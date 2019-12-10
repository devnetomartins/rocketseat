var inputElement = document.querySelector('div#app input');
var buttonElement = document.querySelector('div#app button');
var listElement = document.querySelector('div#app ul');

var todos = JSON.parse(localStorage.getItem('data')) || ['Café', 'Programar', 'Funcionalidades'];

function renderTodos(){
    listElement.innerHTML = '';
    for(todo of todos){
        var topicElement = document.createElement('li');
        var text = document.createTextNode(todo);
        topicElement.appendChild(text);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+pos+')');
        linkElement.appendChild(document.createTextNode('Excluir'));
        topicElement.appendChild(linkElement);

        listElement.appendChild(topicElement);
    }

}

renderTodos();

function addTodo(){
    todos.push(inputElement.value);
    inputElement.value = '';
    renderTodos();
    saveLocalStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(x){
    todos.splice(x, 1);
    renderTodos();
    saveLocalStorage();
}

function saveLocalStorage(){
    localStorage.setItem('data',JSON.stringify(todos));
}