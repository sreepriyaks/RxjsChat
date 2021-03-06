import * as expressApp from './app';
import { Chat } from './models/chat.model';

import * as WebSocket from 'ws';

console.log(process.env.PORT);
const server = expressApp.default.app.listen(process.env.PORT, () => {
  console.log(
    'App is running at http://localhost:%d in %s mode. Press CTRL+C to stop\n',
    process.env.PORT || expressApp.default.app.get('port'),
    expressApp.default.app.get('env')
  );
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws: WebSocket) => {
  ws.on('message', (message: Chat) => {
    console.log('received: %s', message);

    wss.clients.forEach(client => {
      client.send(message);
    });
  });
});

export default server;
