import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamsModule } from './modules/teams/teams.module';

@Module({
  imports: [
    TeamsModule,
    MongooseModule.forRoot('mongodb+srv://<USER>:<PASSWORD>@cluster0.97vvi.mongodb.net/teams-api-nestjs?retryWrites=true&w=majority')
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
