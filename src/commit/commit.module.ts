import { Module } from '@nestjs/common';
import { GithubService } from 'src/services/github/github.service';
import { CommitController } from './commit.controller';

@Module({
  controllers: [CommitController],
  providers: [GithubService]
})
export class CommitModule {}
