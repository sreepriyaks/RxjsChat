"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const expressApp = __importStar(require("./app"));
const WebSocket = __importStar(require("ws"));
console.log(process.env.PORT);
const server = expressApp.default.app.listen(process.env.PORT, () => {
    console.log('App is running at http://localhost:%d in %s mode. Press CTRL+C to stop\n', process.env.PORT, expressApp.default.app.get('env'));
});
const wss = new WebSocket.Server({ server });
wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log('received: %s', message);
        wss.clients.forEach(client => {
            client.send(message);
        });
    });
});
exports.default = server;
//# sourceMappingURL=server.js.map