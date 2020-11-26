import { Schema } from 'mongoose';
import Task from '../interfaces/Task';

export const TaskSchema: Schema<Task> = new Schema({
  title: String,
  description: String,
  done: Boolean,
});
