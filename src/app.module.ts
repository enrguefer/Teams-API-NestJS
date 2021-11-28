import { Module } from '@nestjs/common';
import { AppController } from 'src/controlers/app.controller';
import { AppService } from 'src/services/app.service';
import { TeamsController } from './controlers/teams/teams.controller';
import { TeamsService } from './services/teams/teams.service';

@Module({
  imports: [],
  controllers: [AppController, TeamsController],
  providers: [AppService, TeamsService],
})
export class AppModule {}
