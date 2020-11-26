import { Injectable, Response } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task-dto';
import ITask from './interfaces/Task';

import Task from './interfaces/Task';

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private taskModel: Model<Task>) {}

  async getTasks(res): Promise<Response> {
    try {
      const tasks: ITask[] = await this.taskModel.find();
      return res.status(200).json({
        success: true,
        tasks,
      });
    } catch (e) {
      return res.status(500).json({
        success: false,
        message: 'Internal server ERROR, try later',
      });
    }
  }

  async getTask(id: string, res): Promise<Response> {
    try {
      const task: ITask = await this.taskModel.findById(id);
      if (task == null) {
        return res.status(400).json({
          success: false,
          message: 'ID not found, please send a valid ID',
        });
      }
      return res.status(200).json({
        success: true,
        task,
      });
    } catch (e) {
      return res.status(500).json({
        success: false,
        message: 'Internal server ERROR, try later',
      });
    }
  }

  async createTask(task: CreateTaskDto, res): Promise<Response> {
    try {
      const newTask: ITask = new this.taskModel(task);
      const created: ITask = await newTask.save();
      return res.status(200).json({
        success: true,
        created,
      });
    } catch (e) {
      return res.status(500).json({
        success: false,
        message: 'Internal server ERROR, try later',
      });
    }
  }

  async updateTask(id: string, task: CreateTaskDto, res): Promise<Response> {
    try {
      const updated: ITask = await this.taskModel.findOneAndUpdate(
        { _id: id },
        {
          title: task.title,
          description: task.description,
          done: task.done,
        },
        { new: true },
      );
      if (updated == null) {
        return res.status(400).json({
          success: false,
          message: 'ID not found, please send a valid ID',
        });
      }
      return res.status(200).json({
        success: true,
        updated,
      });
    } catch (e) {
      return res.status(500).json({
        success: false,
        message: 'Internal server ERROR, try later',
      });
    }
  }

  async deleteTask(id: string, res): Promise<Response> {
    try {
      const deleted: ITask = await this.taskModel.findByIdAndDelete({
        _id: id,
      });
      if (deleted == null) {
        return res.status(400).json({
          success: false,
          message: 'ID not found, please send a valid ID',
        });
      }
      return res.status(200).json({
        success: true,
        deleted,
      });
    } catch (e) {
      return res.status(500).json({
        success: false,
        message: 'Internal server ERROR, try later',
      });
    }
  }
}
