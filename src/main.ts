import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// 루트모듈(AppModule)에서 앱을 생성한다.
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
