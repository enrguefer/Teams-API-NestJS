import { Module } from '@nestjs/common';
import { AppController } from 'src/controlers/app.controller';
import { AppService } from 'src/services/app.service';
import { TeamsModule } from './modules/teams/teams.module';

@Module({
  imports: [TeamsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
