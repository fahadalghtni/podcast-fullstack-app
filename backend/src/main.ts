import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ تمكين CORS:
  app.enableCors({
    origin: 'http://localhost:3000', // موقع الفرونت
    credentials: true, // لو بتحتاجه لاحقًا
  });

  await app.listen(3004);
}
bootstrap();
