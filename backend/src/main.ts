import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ تمكين CORS:
  app.enableCors({
    origin: 'https://podcast-fullstack-app-frontend.onrender.com', 
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();
