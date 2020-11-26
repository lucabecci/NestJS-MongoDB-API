import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './config/config'
class App {
  _app: Promise<NestApplication>;
  constructor() {
    this._app = this.create();
  }
  public async create(): Promise<NestApplication> {
    return await NestFactory.create(AppModule);
  }

  public async run() {
    await (await this._app).listen(config.PORT);
  }
}

const app = new App();

app.run();
