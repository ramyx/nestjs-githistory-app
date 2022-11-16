import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GithubService } from './services/github/github.service';
import { CommitModule } from './commit/commit.module';

@Module({
  imports: [CommitModule],
  controllers: [AppController],
  providers: [AppService, GithubService],
})
export class AppModule {}
