import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class KeepAliveService {
  
  @Cron(CronExpression.EVERY_10_MINUTES)
  async keepAlive() {
    try {
      const response = await fetch('https://podcast-fullstack-app-backend.onrender.com/itunes/all');
      console.log('🔄 Keep-alive ping successful');
    } catch (error) {
      console.log('❌ Keep-alive ping failed:', error);
    }
  }
}


