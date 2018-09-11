import { User } from './user.model';

export class Message {
  constructor(private from: User, private content: string) {}
}

export class Chat extends Message {
  constructor(from: User, content: string) {
    super(from, content);
  }
}
