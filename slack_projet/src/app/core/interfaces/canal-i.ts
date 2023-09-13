import { Message } from '../models/message';

export interface CanalI {
  canalName: string;
  id: number;
  messages?: Message[];
}
