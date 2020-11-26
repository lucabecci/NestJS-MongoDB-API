import { Document } from 'mongoose';

export default interface ITask extends Document {
  title: string;
  description: string;
  done: boolean;
}
