import { CanalI } from "../interfaces/canal-i";
import { Message } from "./message";

export class Canal implements CanalI {
  canalName!: string;
  id!: number;
  messages!: Message[];
}
