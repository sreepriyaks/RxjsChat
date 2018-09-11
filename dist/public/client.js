const { WebSocketSubject } = rxjs.webSocket;
var port = process.env.PORT || 3000;
const socket$ = new WebSocketSubject(`ws://localhost:${port}`);

var name;

socket$.subscribe(
  msg => {
    console.log('message received: ' + JSON.stringify(msg));
    addItem(msg);
  },
  err => console.log(err),
  () => console.log('complete')
);

function addItem(val) {
  var node = document.createElement('li');
  var textnode = document.createTextNode(`${val.name}: ${val.message}`);
  node.appendChild(textnode);
  document.getElementById('output').appendChild(node);
  if (name === val.name) alignMessage();
}

function sendMessage() {
  let message = $('#message').val();
  $('#message').val('');
  socket$.next({ name: name, message: message });
}

var nameElement = document.getElementById('name');
function setName() {
  name = nameElement.value;
  if (name === '') {
    nameElement.classList.add('is-invalid');
  } else {
    nameElement.classList.remove('is-invalid');
    $('#namePrompt').modal('hide');
    $('#message').focus();
  }
}

nameElement.addEventListener('keydown', e => {
  if (e.keyCode === 13) {
    setName();
  }
});

var messageElement = document.getElementById('message');
messageElement.addEventListener('keydown', e => {
  if (e.keyCode === 13) {
    sendMessage();
  }
});

function alignMessage() {
  $('#output li:last-child')
    .css('text-align', 'right')
    .css('background', '#bbbaba');
}
