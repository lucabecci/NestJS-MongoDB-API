import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

class App {
  _app: Promise<NestApplication>;
  constructor() {
    this._app = this.create();
  }
  public async create(): Promise<NestApplication> {
    return await NestFactory.create(AppModule);
  }

  public async run() {
    await (await this._app).listen(3000);
  }
}

const app = new App();

app.run();
