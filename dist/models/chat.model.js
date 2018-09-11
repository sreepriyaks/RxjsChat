"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Message {
    constructor(from, content) {
        this.from = from;
        this.content = content;
    }
}
exports.Message = Message;
class Chat extends Message {
    constructor(from, content) {
        super(from, content);
    }
}
exports.Chat = Chat;
//# sourceMappingURL=chat.model.js.map