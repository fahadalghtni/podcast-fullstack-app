import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ تمكين :
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://podcast-fullstack-app-frontend.onrender.com'
    ],
    credentials: true,
  });

  // ✅ Render يعمل محلياً وعلى 
  const port = process.env.PORT || 3001;
  await app.listen(port);

  console.log(`Backend running on port ${port}`);
}
bootstrap();
