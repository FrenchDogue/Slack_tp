import { MessageI } from '../interfaces/message-i';

export class Message implements MessageI {
  text!: string;
  id!: number;
  date!: string;
}
